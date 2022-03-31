## 镜像名 rabbitmq

## 镜像用途

兔子消息队列

## 注意事项

启动命令

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

ps：volume 到物理机的这几个目录需要改变用户组和所有者,注意，不要写成/etc 这种绝对路径，否者会改变根目录的 ect 目录的所有者和用户组。

```bash
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
