## 镜像名 Redis 集群

## 镜像用途

三主三丛的redis集群

## 使用步骤

### 创建模板文件 `redis-cluster.tmpl`

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

### 通过模板文件初始化redis节点文件

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

### 启动集群各个节点

```bash
docker compose up -d
```

### 创建集群

```bash
HOST="宿主机地址,同上"
masterauth="自定义密码，同上"
requirepass="自定义密码，同上"

redis-cli --cluster create $HOST:7000 $HOST:7001 $HOST:7002 $HOST:7003 $HOST:7004 $HOST:7005 --cluster-replicas 1  -a ${requirepass}
```
