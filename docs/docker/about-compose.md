
## docker-compose.yml

**`docker-compose.yml`文件结构**

```yaml
# docker-composew 配置文件格式版本，一般分为 2.x 和 3.x 版本，不同版本直之间会有些差异，具体版本号的选择取决于你的 Docker Engine 的 版本。例如 3.8 版本需要 Docker Engine >= 19.03.0 。而 3.0 之需要>= 1.13.0+ 。 请你按照自己的 docker 版本来填写配置文件格式版本。
version: "3"
# 用于声明服务，在services:下可以声明多个容器的配置文件，例如示例配置在一个compose文件中声明了一个mysql和一个redis容器。
services:
  # mysql容器的配置项目
  mysql:
    image: mysql:8.0.18
    restart: always
    container_name: mysql
    command:
      --default_authentication_plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
      --max_allowed_packet=128M
      --sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
    ports:
      - "3306:3306"
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - $PWD/var/lib/mysql:/var/lib/mysql
      - $PWD/mysqlBackup:/data/mysqlBackup
    environment:
      - MYSQL_ROOT_PASSWORD=<your password>
      - MYSQL_ROOT_HOST='%'
  redis:
    # 镜像名称以及版本号
    image: redis
    # 失败后总是重启
    restart: always
    # 自定义容器名
    container_name: redis-6379
    # 文件夹以及文件映射
    volumes:
      - $PWD/data:/data
      - $PWD/logs:/logs
    command: redis-server --requirepass <your password>
    ports:
      # 端口号
      - "6379:6379"
```
