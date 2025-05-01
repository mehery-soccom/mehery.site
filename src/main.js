import "./preloader";

import { createApp } from "vue";
import DataService from "@services/DataService";
import * as Globals from "@utils/globals";
import * as Utils from "@utils";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { register } from 'swiper/element/bundle';

register();

import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import WOW from "wowjs";
import "animate.css";

import "@assets/base.css";
import "@assets/base.scss";

import Swiper from 'swiper';        
import 'swiper/css';                
import 'swiper/css/navigation';     
import 'swiper/css/autoplay';

window.Swiper = Swiper;            

import { createHead } from "@vueuse/head";

((cmap, cname) => {
    let c = cmap[cname];
    if (!c) return console.log("Invalid App", { cname });

    c.router().then(async function (_router) {
        const app = createApp(c.app);

        const head = createHead();

        /////////////////////////////////////////////////////////////////////////////////////
        app.use(_router.default);
        app.use(BootstrapVue);
        app.use(IconsPlugin);
        app.use(LoadingPlugin);
        app.use(head);

        app.component("font-awesome-icon", FontAwesomeIcon);

        // app.directive("parallax", parallax);
        // app.component('ComponentName', Component)
        // app.provide('key', 'value')
        app.config.globalProperties.$dataService = DataService;
        app.config.globalProperties.$globals = Globals;
        app.config.globalProperties.$utils = Utils;
        app.config.errorHandler = err => {
            console.log("app.config.errorHandler", err);
        };
        new WOW.WOW().init();
        /////////////////////////////////////////////////////////////////////////////////////
        const loader = app.config.globalProperties.$loading.show();
        try {
            await app.config.globalProperties.$dataService.init();
            app.mount("#app");
        } catch (error) {
            console.error("Failed to mount app");
        } finally {
            loader.hide();
        }
        /////////////////////////////////////////////////////////////////////////////////////
    });
})(
    {
        app: {
            app: () => import(/* webpackChunkName: "App" */ "@src/app/App.vue"),
            router: () => import(/* webpackChunkName: "App_Router" */ "@src/app/router")
        },
        [Globals.MRY_APP_NAME]: {
            app: () => import(/* webpackChunkName: "App" */ "@src/app-mry/App.vue"),
            router: () => import(/* webpackChunkName: "App_Router" */ "@src/app-mry/router")
        },
        [Globals.PUSH_APP_NAME]: {
            app: () => import(/* webpackChunkName: "App" */ "@src/app-pushapp/App.vue"),
            router: () => import(/* webpackChunkName: "App_Router" */ "@src/app-pushapp/router")
        }
    },
    window.CONST.APP
);
