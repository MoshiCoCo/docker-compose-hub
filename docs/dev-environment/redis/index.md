## Redis

## 注意事项

如果需要使用密码访问redis 请在 requirepass 后跟上你的自定义密码。

```bash

mkdir docker-redis && cd docker-redis

docker-compose up -d

# or

docker compose up -d

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
    command: redis-server --requirepass <your-password>
    ports:
      # 端口号
      - "6379:6379"
```

如果需要使用自定义的redis.conf配置文件启动，请使用如下compose编排文件启动。将redis.conf放置在docker-redis目录下。

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
```
