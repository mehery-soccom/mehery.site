import { createRouter, createWebHistory } from "vue-router";
import { MRY_APP_CONTEXT } from "@utils/globals";
import { fakeAuth } from "./utils/auth";
import AdminLogin from "./views/AdminLogin.vue";
import BlogEditor from "./views/BlogEditor.vue";
import FaqEditor from './views/FAQEditor.vue' 
const base = MRY_APP_CONTEXT;

const routes = [
    {
        path: `/`,
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "@src/app-mry/layout/Home.vue")
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
    {
        path: `/partner`,
        name: "Partner",
        component: () => import("@src/app-mry/layout/Partner.vue")
    },
    {
        path: `/about`,
        name: "About",
        component: () => import("@src/app-mry/layout/About.vue")
    },
    {
        path: `/blog`,
        name: "Blog",
        component: () => import("@src/app-mry/layout/Blog.vue")
    },
    { path: "/admin/login", name: "AdminLogin", component: AdminLogin },
    {
        path: "/admin/edit",
        name: "BlogEditor",
        component: BlogEditor,
        beforeEnter: (to, from, next) => {
            fakeAuth.checkAuth() ? next() : next("/admin/login");
        }
    },
    {
        path: `/faq`,
        name: "Faq",
        component: () => import("@src/app-mry/layout/FAQ.vue")
    },
    {
        path: "/admin/faq-editor", 
        name: "FaqEditor",
        component: FaqEditor
    },
    {
        path: `/privacy`,
        name: "Privacy",
        component: () => import("@src/app-mry/layout/Privacy.vue")
    },
    {
        path: `/career`,
        name: "Career",
        component: () => import("@src/app-mry/layout/Career.vue")
    }
];

const router = createRouter({
    history: createWebHistory(base),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: "smooth",
                        top: 132
                    });
                }, 250);
            });
        }
        return { top: 0 };
    }
});

export default router;
