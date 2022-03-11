<div align="center">
<h1 align="center">Docker-Starter</h1>

</div>

### 关于仓库

常用 docker 容器快速启动仓库，帮你使用 docker 完成搭建云环境的搭建。

**理论上，你可以在克隆仓库后，切换到任意目录，使用`docker-compose up -d` 命令快速启动一个容器，并开始使用**

目前涵盖了我常用的开发环境和工具环境，文档描述比较粗糙，后续会润色。部分是 docker run 命令，后续会增加 docker-compose.yml 文件

- Docker 和 Docker-Compose 的安装请参照 [docker 和 docker-compose 的安装](#docker-和-docker-compose-的安装)

- 如果想简单修改 docker-compose.yml 文件配置，但是又不懂 compose 文件的配置含义 请阅读 [compose 文件结构释义](docs/README.md)

### 集成开发环境

使用一条 `docker-compose up -d` 命令完成 redis，mysql，mq 等开发环境的容器的启动，开箱即用。

### 基础开发环境

此处的容器为单个容器，按需求启动。

- [MySQL](MySQL/)
- [Redis](redis/)
- [Redis 集群（3 主 3 从）](redis-cluster/)
- [RabbitMQ](rabbit-mq/)
- Nacos
- ShardingSphere-Proxy
-

### 常用工具

- [vaultwarden](vaultwarden/) 密码管理器
- [qinglong](qinglong/) 脚本运行服务
- [bark](bark/) 消息推送服务端
- [drawio](drawio/) 画图工具，流程图，UML 等
- [acme.sh](acme.sh/) 免费 SSL 生成工具
- halo
-

## Docker 和 Docker-Compose 的安装

### 安装 docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
```

### 安装 Docker-compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

docker-compose --version
```

## 一些约定

在 docker-compose.yml 配置文件中，有些参数是可变的，以 Redis 的 docker-compose.yml 为例:

```yaml
version: "3"
services:
  redis:
    # 镜像名称以及版本号
    image: redis
    # 失败后总是重启
    restart: always
    # 自定义容器名
    container_name: redis-6000
    # 文件夹以及文件映射
    volumes:
      - $PWD/data:/data
      - $PWD/logs:/logs
    command: redis-server --requirepass <your-redis-connaction-password>
    ports:
      # 端口号
      - "6000:6379"
```

**密码相关**

此处的 `command: redis-server --requirepass <your-password>` 是用于设置一个 redis 连接密码，该密码由用户自己生成。 本项目中此类均以`< some user password or username >`的形式展示，用户在实际填写时请勿保留`< >` .

如果你的密码是 `wodemimashi123`

正确写法：`command: redis-server --requirepass wodemimashi123`

错误写法：`command: redis-server --requirepass <wodemimashi123>`

**端口号相关**

针对端口号`6000:6379`,这里指的是将容器内的 6379 端口映射到宿主机的 6000 端口，我们将 6000 称之为左侧端口（宿主机端口），6379 称之为右侧端口（容器内的服务端口），大白话：这样写的话你使用服务器的 6000 端口就能访问到该容器内 6379 端口的 redis 服务。 如果需要修改端口，一般只修改左侧端口。

## ⭐️Stars
![https://github-nicelee.vercel.app/h/MoshiCoCo/docker-compose-hub](https://github-nicelee.vercel.app/h/MoshiCoCo/docker-compose-hub)
