## ACME

申请免费的 SSL 证书，支持 Let‘s Encrypt，ZeroSSL 等免费证书。支持 aliyun，dnspod，cloudfrad 等厂商。

## 注意事项

运行 docker-compose 后运行以下命令

```bash
docker exec -it acme.sh sh
acme.sh --register-account -m youmail@domain.com --server zerossl
acme.sh --issue --dns dns_dp -d example.com -d *.example.com
```

查看`./acme.sh/example.com`目录

## 常用命令

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
