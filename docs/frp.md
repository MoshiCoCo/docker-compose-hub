---
title: FRP 内网穿透
description: FRP 内网穿透
---

## 镜像名

FRP 内网穿透

## 镜像用途

## 注意事项

### 使用docker-compose

启动服务端：`docker-compose -f docker-compose-server.yml up -d`

启动客户端：`docker-compose -f docker-compose-client.yml up -d`

### 使用docker run 

```bash
# 服务端

docker run -dit \
--name frps \
--restart=always \
--network host \
-v /etc/localtime:/etc/localtime:ro \
-v $PWD/frps.ini:/etc/frp/frps.ini \
snowdreamtech/frps
```

```bash
# 客户端
docker run -dit \
--name frpc \
--restart=always \
--network host \
-v /etc/localtime:/etc/localtime:ro \
-v $PWD/frpc.ini:/etc/frp/frpc.ini \
snowdreamtech/frpc
```
