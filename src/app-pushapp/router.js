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
        path: `/privacy-policy`,
        name: "PrivacyPolicy",
        component: () => import("@src/app-pushapp/layout/PrivacyPolicy.vue")
    },
    {
        path: '/terms',
        name: 'TermsOfUse',
        component: () => import('@src/app-pushapp/layout/TermsOfUse.vue')
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
    },
    
];

const router = createRouter({
    history: createWebHistory(base),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) {
          return { el: to.hash, behavior: 'smooth' };
        }
        return { top: 0, behavior: 'smooth' };
      }
});

export default router;
