import {defineConfig} from 'vitepress'


function nav() {
    return [
        {text: '首页', link: '/'},
        {text: '常用工具', link: '/tools/', activeMatch: "/tools"},
        {text: '开发工具', link: '/dev-environment/', activeMatch: "/dev-environment"},
    ];
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "DockerComposeHub",
    description: "DockerComposeHub",
    lang: "zh-CN",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav(),
        sidebar: {
            '/tools/': [
                {
                    text: '常用工具',
                    items: [
                        {text: 'Bark', link: '/tools/bark/'},
                        {text: 'Halo', link: '/tools/halo/'},
                        {text: 'Acme sh', link: '/tools/acme-sh/'},
                        {text: 'Drawio', link: '/tools/drawio/'},
                        {text: 'Emby', link: '/tools/emby/'},
                        {text: 'Frp', link: '/tools/frp/'},
                        {text: 'NetData', link: '/tools/netdata/'},
                        {text: 'QingLong', link: '/tools/qinglong/'},
                        {text: 'VaultWarden', link: '/tools/vaultwarden/'},
                        {text: 'WordPress', link: '/tools/wordpress/'},
                    ]
                }
            ],
            '/dev-environment/': [
                {
                    text: '开发环境',
                    items: [

                        {text: 'MySql', link: '/dev-environment/mysql/'},
                        {text: 'Redis', link: '/dev-environment/redis/'},
                        {text: 'Redis Cluster', link: '/dev-environment/redis-cluster/'},
                        {text: 'MinIO', link: '/dev-environment/minio/'},
                        {text: 'Drone', link: '/dev-environment/drone/'},
                        {text: 'Nginx', link: '/dev-environment/nginx-consul-registrator/'},
                        {text: 'Portainer', link: '/dev-environment/portainer/'},
                        {text: 'Rabbit MQ', link: '/dev-environment/rabbit-mq/'},


                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }

})
