---
id: Install-Docker-DockerCompose
sidebar_position: 1
title: Install Docker & Docker Compose
description: Install Docker
---

## 安装 Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
```

## 安装 Docker-Compose

如果你的Docker版本较新,可直接使用`docker compose`命令,无需安装`docker-compose`

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

docker-compose --version
``` 
