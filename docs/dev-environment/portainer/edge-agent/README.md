---
title:  portainer-agent
description: portainer-agent
---

## 镜像信息

| 镜像名       | portainer/agent:latest         |
|-----------|--------------------------------|
| 源仓库       | [源仓库](https://github.com)      |
| DockerHub | [源仓库](https://dockerhub.com)   |

## 镜像用途

portainer/agent，用于部署在被监控的机器上。

## 注意事项

此处用于介 docker-compose.yml 中的特殊配置以及镜像专属的一些注意事项。

```yml
version: "3"
services:
  server:
    image: portainer/agent:latest
    container_name: portainer_edge_agent
    restart: always
    volumes:
      ## 此处也可以使用自己创建的docker volume
      - $PWD/data:/data
      - /var/run/docker.sock:/var/run/docker.sock
      - /:/host
      ## 时区设置
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - EDGE=1
      ## EdgeAgent ID，在portainer-ce的后台创建环境时，选择Eage-Agent时会生成EDGE_ID和EDGE_KEY
      - EDGE_ID=<Your EdgeAgent identifier>
      - EDGE_KEY=<Your Edge key>
      - EDGE_INSECURE_POLL=1
```
