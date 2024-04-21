## MYSQL

## 使用方法

自定义的root账户密码需要在environment中修改MYSQL_ROOT_PASSWORD。

```yaml
services:
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
      # 自定义root密码修改此处
      MYSQL_ROOT_PASSWORD: <your password>
      MYSQL_ROOT_HOST: '%'
```

启动方式：

```bash

mkdir docker-mysql8 && cd docker-mysql8

docker-compose up -d

# or
docker compose up -d
```
