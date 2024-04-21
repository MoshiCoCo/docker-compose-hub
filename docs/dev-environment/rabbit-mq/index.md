## Rabbitmq

兔子消息队列

## docker-compose启动

docker-compose.yaml文件示例

```yaml

services:
  rabbit-mq:
    # 镜像名称以及版本号
    image: rabbitmq:3-management
    # 失败后总是重启
    restart: always
    # 自定义容器名
    container_name: rabbitmq
    # 文件夹以及文件映射
    volumes:
      - $PWD/etc:/etc/rabbitmq
      - $PWD/lib:/var/lib/rabbitmq
      - $PWD/log:/var/log/rabbitmq
    ports:
      # 端口号
      - "5672:5672"
      - "15672:15672"
```

启动命令

```bash

mkdir docker-rabbitmq && cd docker-rabbitmq

# 需要将docker-compose.yaml文件放置在此目录下。

docker-compose up -d

# or
docker compose up -d
```

## docker runq启动

```bash
docker run -dit \
  --name rabbitmq \
  --restart=always \
  -p 5672:5672 \
  -p 15672:15672 \
  -v $PWD/etc:/etc/rabbitmq \
  -v $PWD/lib:/var/lib/rabbitmq \
  -v $PWD/log:/var/log/rabbitmq \
  rabbitmq:3-management
```

## 注意事项

ps：volume 到物理机的这几个目录需要改变用户组和所有者, 注意，不要写成`/etc` 这种绝对路径，否者会改变根目录的 `/ect`
目录的所有者和用户组。

```bash
cd docker-rabbitmq
chown -R 999:docker etc lib log
```

其他命令

```bash
# 启用管理面板
docker exec -it rabbitmq  rabbitmq-plugins enable rabbitmq_management
# 增加用户
docker exec -it rabbitmq rabbitmqctl add_user username password
# 赋权
docker exec -it rabbitmq rabbitmqctl set_permissions -p / username ".*" ".*" ".*"
# 权限组
docker exec -it rabbitmq rabbitmqctl set_user_tags username administrator
```
