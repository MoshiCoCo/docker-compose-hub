## 镜像名 Redis集群

## 镜像用途

三主三丛的redis集群

## 注意事项

需要在redis-cluster.tmpl 预先配置masterauth 和 requirepass值，一个是集群通信认证密码，一个是redis集群密码。

然后在run.sh中配置服务器地址和requirepass的值
