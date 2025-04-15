import { createRouter, createWebHistory } from "vue-router";
import { PUSH_APP_CONTEXT } from "@utils/globals";

const base = PUSH_APP_CONTEXT;

const routes = [
    {
        path: `/`,
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "@src/app-pushapp/layout/Home.vue")
    },
    {
        path: `/:page/:contentName?`,
        name: "DynamicRouteComponent",
        component: () =>
            import(/* webpackChunkName: "DynamicRouteComponent" */ "@src/@components/DynamicRouteComponent.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import(/* webpackChunkName: "NotFound" */ "@src/@components/NotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(base),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log("scrollBehavior", { to, from, savedPosition });
        return window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

export default router;
