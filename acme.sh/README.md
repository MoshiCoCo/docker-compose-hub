## 镜像名
neilpang/acme.sh
## 镜像用途
免费SSL生成工具
## 注意事项

运行docker-compose后运行以下命令
```bash
docker exec -it acme.sh sh
acme.sh --register-account -m youmail@domain.com --server zerossl
acme.sh --issue --dns dns_dp -d example.com -d *.example.com
```
查看`./acme.sh/example.com`目录