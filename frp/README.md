## 镜像名

## 镜像用途

## 注意事项

FRP
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
