## Drone

一套适用于小型企业的轻量`Devops`环境

## 创建oauth2应用

在[Gitee](https://gitee.com/oauth/applications)中创建oauth2应用

- 回调地址应该是 <https://DRONE_SERVER_HOST/login>
- 需要赋予`project`, `pull_requests`, `hook`, `email`权限
- 将此应用的`client_id`和`client_secret`拷贝到`docker-compose.yml`文件中对应的位置

## 生成RPC密钥

```bash
$ openssl rand -hex 16
98ada780653e6a4c9f1e19eb9a1c73ec
```

## 启动应用

```bash
docker-compose up -d
```

## Tips

- [Drone的官方文档](https://docs.drone.io/)
- [Drone 官方插件列表](https://plugins.drone.io/)
- [Drone支持的代码托管平台](https://docs.drone.io/server/overview/)
- 注意启动的用户, 如果为root, 则容器中产生的所有文件都属root所有.推荐做法是创建一个Devops用户.
