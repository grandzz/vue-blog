import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/Index'

import ArticleList from "@/components/ArticleList/ArticleList";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: '/',
                    name: 'index',
                    components: {
                        content: ArticleList
                    }
                }
            ]
        }
    ]
})

export default router
