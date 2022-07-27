---
title: WordPress
description: WordPress
---

## 镜像信息

| 镜像名       | wordpress:latest             |
|-----------|------------------------------|
| 源仓库       | [源仓库](https://github.com)    |
| DockerHub | [源仓库](https://dockerhub.com) |

## 镜像用途

WordPress 博客

## 注意事项

此处用于介 docker-compose.yml 中的特殊配置以及镜像专属的一些注意事项。

```bash
## 阿里云域名签发ecc证书
acme.sh   --issue   --dns dns_ali   -d yourdomain.com  -d *.yourdomain.com  --dnssleep 3  --keylength ec-256
```

```bash
## 腾讯云域名签发ecc证书
acme.sh   --issue   --dns dns_dp   -d yourdomain.com  -d *.yourdomain.com  --dnssleep 300
```

```bash
## 更新所有证书
acme.sh --renew-all
```
