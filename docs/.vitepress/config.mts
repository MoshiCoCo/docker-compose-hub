import {defineConfig} from 'vitepress'
import zh_CN from "./locales/zh_CN";
import en_US from "./locales/en_US";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "DockerComposeHub",
    description: "DockerComposeHub",
    locales: {
        root: {
            label: "简体中文",
            // @ts-ignore
            title: zh_CN.title,
            // @ts-ignore
            lang: zh_CN.long,
            // @ts-ignore
            description: zh_CN.description,
            // @ts-ignore
            themeConfig: zh_CN.themeConfig,
        },
        en_us: {
            label: "English",
            // @ts-ignore
            title: en_US.title,
            // @ts-ignore
            lang: en_US.lang,
            // @ts-ignore
            description: en_US.description,
            // @ts-ignore
            themeConfig: en_US.themeConfig,
        },
    },
    themeConfig: {
        i18nRouting: true,
        search: {
            provider: "local"
        },
        outline: [2, 3],
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'},
            {text: 'DevTools', link: '/tools'},
            {text: 'DevEnv', link: '/dev-environment'}
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
