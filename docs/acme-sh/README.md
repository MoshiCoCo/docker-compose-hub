---
title: neilpang/acme.sh
description: neilpang/acme.sh
---

## 查看docker-compose.yml

## 镜像信息

neilpang/acme.sh

## 镜像用途

申请免费的 SSL 证书，支持 Let‘s Encrypt，ZeroSSL 等免费证书。支持 aliyun，dnspod，cloudfrad 等厂商。

## 注意事项

运行 docker-compose 后运行以下命令

```bash
docker exec -it acme.sh sh
acme.sh --register-account -m youmail@domain.com --server zerossl
acme.sh --issue --dns dns_dp -d example.com -d *.example.com
```

查看`./acme.sh/example.com`目录
