## Halo

本教程已经PR至 Halo
官方文档，也可以前往 [Halo官方文档/next](https://docs.halo.run/next/getting-started/install/other/docker-compose) 查看

| 镜像名           |   acme.sh       |
| ---------------- | -------- |
| 源仓库          |[https://github.com](https://github.com/halo-dev/halo) |
| DockerHub |[https://dockerhub.com](https://github.com/halo-dev/halo) |

## 镜像用途

一款现代化的开源博客 / CMS 系统。

## 使用 Docker-Compose 部署 Halo

1.创建工作目录

```bash
mkdir ~/.halo && cd ~/.halo
```

2.下载示例配置文件到工作目录

```bash
wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml
```

3.编辑配置文件，配置数据库或者端口等.

```bash
vim application.yaml
```

4.创建 `docker-compose.yaml`

Halo 基础版本

```yaml
version: "3"

services:
  server:
    image: halohub/halo:1.5.0
    container_name: halo
    restart: on-failure:3
    volumes:
      - ~/.halo:/root/.halo
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "8090:8090"
```

> 您可以前往 <https://hub.docker.com/r/halohub/halo> 查看最新版本镜像，我们推荐使用具体版本号的镜像，但也提供了 `latest`
> 标签的镜像，它始终是最新的。

Halo + MySQL + Redis 版本

如果您需要使用自部署的 `MySQL` 和 `Redis`，可参考如下的 `docker-compose.yaml`：

```yaml
version: "3"

services:
  halo_server:
    depends_on:
      - mysql_db
      - redis_db
    image: halohub/halo:1.5.0
    container_name: halo-self
    restart: on-failure:3
    networks:
      halo_net:
        ipv4_address: 172.19.0.4
    volumes:
      - ~/.halo:/root/.halo
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "8090:8090"

  mysql_db:
    image: mysql:8.0.27
    restart: on-failure:3
    networks:
      halo_net:
        ipv4_address: 172.19.0.2
    container_name: halo-mysql
    command: --default_authentication_plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
    ports:
      - "3306:3306"
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ~/.halo/init:/docker-entrypoint-initdb.d/
      - ~/.halo/mysql/var/lib/mysql:/var/lib/mysql
      - ~/.halo/mysql/mysqlBackup:/data/mysqlBackup
    environment:
      ## 此处需要输入自定义 MySQL 密码
      - MYSQL_ROOT_PASSWORD=mysqlpass

  redis_db:
    image: redis
    restart: on-failure:3
    networks:
      halo_net:
        ipv4_address: 172.19.0.3
    container_name: halo-redis
    volumes:
      - ~/.halo/redis/data:/data
      - ~/.halo/redis/logs:/logs
    ## 此处需要输入自定义 Redis 密码
    command: redis-server --requirepass redispass
    ports:
      - "6379:6379"

networks:
  halo_net:
    driver: bridge
    ipam:
      config:
        - subnet: 172.19.0.0/16
```

> 注意，如果您使用了自部署的 `MySQL` 和 `Redis`，由于 `Halo` 启动时并不会主动创建数据库或者 `schema`
> ，所以您应该提前创建好 `init.sql` 并且同步更改 `application.yaml`
> 中的数据源地址和 `cache` 选项。

创建 init.sql :

```bash
mkdir init && touch ~/.halo/init/init.sql
echo 'create database halodb character set utf8mb4 collate utf8mb4_bin;' > ~/.halo/init/init.sql
```

修改数据源配置 :

```yaml
spring:
  datasource:
    # MySQL database configuration.
    driver-class-name: com.mysql.cj.jdbc.Driver
    # 此处的地址应该使用 docker-compose.yaml 中配置的 MySQL 地址和密码
    url: jdbc:mysql://mysql_db:3306/halodb?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
    username: root
    password: mysqlpass
  redis:
    # Redis cache configuration.
    port: 6379
    database: 0
    # 此处的地址应该使用 docker-compose.yaml 中配置的 Redis 地址和密码
    host: redis_db
    password: redispass

halo:
  # Your admin client path is https://your-domain/{admin-path}
  admin-path: admin

  # memory or level or redis
  cache: redis
```

1. 启动 Halo 服务

```bash
docker-compose up -d
```

> 注意：如果您未在 `application.yaml` 中修改数据源配置，使用此命令启动则会默认使用自带的 `H2 Database`
> 数据库。如需使用 `MySQL`，请将 `datasource` 配置更改为 `MySQL`
> 的配置。

6.打开 `http://ip:端口号` 即可看到安装引导界面。

> 如果需要配置域名访问，建议先配置好反向代理以及域名解析再进行初始化。如果通过 `http://ip:端口号`
> 的形式无法访问，请到服务器厂商后台将运行的端口号添加到安全组，如果服务器使用了 Linux 面板，请检查此 Linux
> 面板是否有还有安全组配置，需要同样将端口号添加到安全组。

## 反向代理

你可以在下面的反向代理软件中任选一项，我们假设你已经安装好了其中一项，并对其的基本操作有一定了解。

## Nginx

```nginx
upstream halo {
  server 127.0.0.1:8090;
}
server {
  listen 80;
  listen [::]:80;
  server_name www.yourdomain.com;
  client_max_body_size 1024m;
  location / {
    proxy_pass http://halo;
    proxy_set_header HOST $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

## Caddy 1.x

```txt
https://www.yourdomain.com {
 gzip
 tls your@email.com
 proxy / localhost:8090 {
  transparent
 }
}
```

## Caddy 2.x

```txt
www.yourdomain.com

encode gzip

reverse_proxy 127.0.0.1:8090
```

以上配置都可以在 <https://github.com/halo-dev/halo-common> 找到。

## 更新镜像

1.停止运行中的容器

```bash
docker-compose stop
```

> 此操作会停止所有使用当前 `docker-compose.yaml` 启动的容器，如果需要单独更新镜像，请参考上文。

2.备份数据（重要）

```bash
cp -r ~/.halo ~/.halo.archive
```

> 需要注意的是，`.halo.archive` 文件名不一定要根据此文档命名，这里仅仅是个示例。

3.清空 leveldb缓存（如果有使用 leveldb 作为缓存策略）

```bash
rm -rf ~/.halo/.leveldb
```

4.更新 Halo 服务

> 注意，当您的 `Docker` 镜像源非官方源时,执行 `docker-compose pull` 命令时可能无法获取到最新的 `latest` 标签的镜像。

针对使用 `latest` 标签镜像的更新：

```bash
docker-compose pull && docker-compose up -d
```

针对使用具体版本标签镜像的更新：

修改 `docker-compose.yaml` 中配置的镜像版本。

```diff
services:
  halo_server:
    depends_on:
      - mysql_db
      - redis_db
-    image: halohub/halo:1.5.0
+    image: halohub/halo:1.5.1
    container_name: halo-self
```

启动容器组：

```bash
docker-compose up -d
```
