FROM nginx:latest

#Install Wget
RUN apt-get update && apt-get -y install wget

#Download and Install Consul Template
ENV CT_URL https://releases.hashicorp.com/consul-template/0.20.0/consul-template_0.20.0_linux_amd64.tgz
RUN wget $CT_URL && \
tar -zxf consul-template_0.20.0_linux_amd64.tgz -C /usr/bin/ && \
rm consul-template_0.20.0_linux_amd64.tgz

#Setup Consul Template Files
RUN mkdir /etc/consul-templates
ENV CT_FILE /etc/consul-templates/nginx.conf.ctmpl

#Setup Nginx File
ENV NX_FILE /etc/nginx/conf.d/default.conf

#Default Variables
ARG SERVICE
ENV CONSUL consul:8500
ENV SERVICE ${SERVICE}

# Command will
# 1. Write Consul Template File
# 2. Start Nginx
# 3. Start Consul Template
COPY ./nginx.conf.ctmpl $CT_FILE
RUN sed -i "s/k1c2b3/${SERVICE}/g" $CT_FILE

CMD /usr/sbin/nginx -c /etc/nginx/nginx.conf \
& CONSUL_TEMPLATE_LOG=debug consul-template \
  -consul-addr=$CONSUL \
  -template "$CT_FILE:$NX_FILE:nginx -s reload";