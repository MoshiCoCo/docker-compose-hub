## Redis 集群

3主3丛的redis单机集群。

## 使用步骤

## 创建模板文件 `redis-cluster.tmpl`

注意，模板文件中所有`${}`包裹的值均为后续shell命令传递的，请勿在模板文件中修改，其他值则可在模板文件中修改。

```yml
# redis端口
port ${PORT}
daemonize no
  # 关闭保护模式
protected-mode no
  # 开启集群
cluster-enabled yes
  # 集群节点配置
cluster-config-file nodes.conf
  # 超时
cluster-node-timeout 5000
  # 集群节点IP host模式为宿主机IP
cluster-announce-ip ${HOST}

  # 集群节点端口 7001 - 7006
cluster-announce-port ${PORT}
cluster-announce-bus-port 1${PORT}
  # 开启 appendonly 备份模式
appendonly yes
  # 每秒钟备份
appendfsync everysec
  # 对aof文件进行压缩时，是否执行同步操作
no-appendfsync-on-rewrite no
  # 当目前aof文件大小超过上一次重写时的aof文件大小的100%时会再次进行重写
auto-aof-rewrite-percentage 100
  # 重写前AOF文件的大小最小值 默认 64mb
auto-aof-rewrite-min-size 64mb
masterauth ${masterauth}
requirepass ${requirepass}
```

## 通过模板文件初始化redis节点文件

创建redis-cluster.tmpl 后，需要在run.sh预先配置masterauth 和 requirepass值，一个是集群通信认证密码，一个是redis集群密码，以及宿主机IP。

```bash
HOST="宿主机地址"
masterauth="自定义密码"
requirepass="自定义密码"

#生成Redis结点文件
for port in $(seq 7000 7005); do
    mkdir -p ./${port}/conf &&
        PORT=${port}  HOST=${HOST} masterauth=${masterauth} requirepass=${requirepass} envsubst <./redis-cluster.tmpl >./${port}/conf/redis.conf &&
        mkdir -p ./${port}/data
done

echo "init redis conf file success "
```

## 启动集群各个节点

```bash
docker compose up -d
```

## 创建集群

```bash
HOST="宿主机地址,同上"
masterauth="自定义密码，同上"
requirepass="自定义密码，同上"

redis-cli --cluster create $HOST:7000 $HOST:7001 $HOST:7002 $HOST:7003 $HOST:7004 $HOST:7005 --cluster-replicas 1  -a ${requirepass}
```

## 多主机节点集群

## 方案1

注意，此编排文件适用于单机集群，如果你需要将集群部署在多台机器上，请修改生成的节点配置文件，然后将节点配置文件上传到不同的服务器上。注意不同节点需要配置不同的主机地址和端口。

例如生成7001-7005的节点配置文件，可以手动修改每个配置文件的主机地址，假设3台主机的主机地址分别为：

172.123.123.121
172.123.123.122
172.123.123.122

可以将7000和7001的节点配置文件的主机地址修改为172.123.123.121，7002和7003的主机地址修改为172.123.123.122，7004和7005的主机地址修改为172.123.123.123

然后将docker-compose编排文件中的service2个一组，重新编排为3个compose文件，在不同的主机上启动即可。

之后创建集群即可。

```bash
redis-cli --cluster create 172.123.123.121:7000 172.123.123.121:7001 172.123.123.122:7002 172.123.123.122:7003
172.123.123.123:7004 172.123.123.123:7005 --cluster-replicas 1 -a ${requirepass}
```

## 方案2

使用单机版本的redis编排文件，使用指定配置文件（可直接使用redis-cluster.tmpl重命名为redis.conf）方式在不同的机器上启动redis容器。
，在compose文件需要暴露集群通讯端口，然后使用`redis-cli --cluster create`命令创建集群即可。

redis.conf 文件示例

```conf
daemonize no
  # 关闭保护模式
protected-mode no
  # 开启集群
cluster-enabled yes
  # 集群节点配置
cluster-config-file nodes.conf
  # 超时
cluster-node-timeout 5000

  # 开启 appendonly 备份模式
appendonly yes
  # 每秒钟备份
appendfsync everysec
  # 对aof文件进行压缩时，是否执行同步操作
no-appendfsync-on-rewrite no
  # 当目前aof文件大小超过上一次重写时的aof文件大小的100%时会再次进行重写
auto-aof-rewrite-percentage 100
  # 重写前AOF文件的大小最小值 默认 64mb
auto-aof-rewrite-min-size 64mb

  # 集群节点IP host模式为宿主机IP  需要配置主机IP
cluster-announce-ip ${HOST}
  # redis端口
port 6379
  # 集群节点端口 
cluster-announce-port 6379
cluster-announce-bus-port 16379
  #需要配置密码 
masterauth ${masterauth}
  #需要配置密码 
requirepass ${requirepass}
```

```yaml

services:
  redis:
    # 镜像名称以及版本号
    image: redis
    # 失败后总是重启
    restart: always
    # 自定义容器名
    container_name: redis-6379
    # 文件夹以及文件映射
    volumes:
      - $PWD/data:/data
      - $PWD/logs:/logs
      - $PWD/redis.conf:/usr/local/etc/redis/redis.conf
    command: [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
    ports:
      # 端口号
      - "6379:6379"
      - "16379:16379"
```
