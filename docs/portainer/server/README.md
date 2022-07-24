---
title:  portainer-ce
description: portainer-ce
---

## 镜像信息

| 镜像名       | portainer/portainer-ce:latest |
|-----------|-------------------------------|
| 源仓库       | [源仓库](https://github.com)     |
| DockerHub | [源仓库](https://dockerhub.com)  |

## 镜像用途

portainer-ce

## 注意事项

此处用于介 docker-compose.yml 中的特殊配置以及镜像专属的一些注意事项。

```yml
version: "3"
services:
  server:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: always
    volumes:
      - $PWD/data:/data
      - /var/run/docker.sock:/var/run/docker.sock
      ## 挂载机器的时间配置，不然容器内的时间和宿主机时间不一致
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      ## 8000端口用于其他边缘节点的edge agent访问 
      - 8000:8000
      ## 管理页面端口。 如果你要套一层nginx+证书，建议转发到此端口
      - 9000:9000
      ## 管理页面端口（TLS）。 
      - 9443:9443
```
