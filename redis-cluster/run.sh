IpAddr="you server ip"  \
#生成redis节点配置文件
for port in `seq 7000 7005`; do \
 mkdir -p ./${port}/conf \
  && PORT=${port} envsubst < ./redis-cluster.tmpl > ./${port}/conf/redis.conf \
 && mkdir -p ./${port}/data; \
 done

# 配置启动容器
for port in $(seq 7000 7005); \
do \
   docker run -it -d -p ${port}:${port} -p 1${port}:1${port} \
  --privileged=true -v $PWD/${port}/conf/redis.conf:/usr/local/etc/redis/redis.conf \
  --privileged=true -v $PWD/${port}/data:/data \
  --restart always --name redis-${port} \
  --sysctl net.core.somaxconn=1024 redis redis-server /usr/local/etc/redis/redis.conf; \
done
 
# 启动集群

redis-cli --cluster create $IpAddr:7000 $IpAddr:7001 $IpAddr:7002 $IpAddr:7003 $IpAddr:7004 $IpAddr:7005 --cluster-replicas 1  -a youpassword