HOST="宿主机地址"
masterauth="自定义密码"
requirepass="自定义密码"

#生成Redis结点文件
for port in $(seq 7000 7005); do
    mkdir -p ./${port}/conf &&
        PORT=${port}  HOST=${HOST} masterauth=${masterauth} requirepass=${requirepass} envsubst <./redis-cluster.tmpl >./${port}/conf/redis.conf &&
        mkdir -p ./${port}/data
done

echo "init redis conf file success "

docker-compose up -d  &&  redis-cli --cluster create $HOST:7000 $HOST:7001 $HOST:7002 $HOST:7003 $HOST:7004 $HOST:7005 --cluster-replicas 1  -a ${requirepass}
