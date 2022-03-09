<div align="center">
<h1 align="center">Docker-Starter</h1>

</div>

## 关于仓库

常用 docker 容器快速启动仓库，帮你使用 docker 完成搭建云环境的搭建。

**理论上，你可以在克隆仓库后，切换到任意目录，使用`docker-compose up -d` 命令快速启动一个容器，并开始使用**

目前涵盖了我常用的开发环境和工具环境，文档描述比较粗糙，后续会润色。部分是 docker run 命令，后续会增加 docker-compose.yml

Docker 和 Docker-compose 的安装请参照 [docker 和 docker-compose 的安装](#docker和docker-compose的安装)

## 列表

### 基础开发环境

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
- [drawio](drawio/) 画图工具，流程图，UML等
- [acme.sh](acme.sh/) 免费SSL生成工具
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
