import Vue from 'vue'
import VueRouter from 'vue-router'
import ManageBook from "~/views/ManageBook";
import AddBook from "~/views/AddBook";
import UpdateBook from "~/views/UpdateBook";
import Index from "~/views/Index"

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: '导航一',
        component: Index,
        show: true,
        redirect: '/managebook',
        children: [
            {
                path: '/managebook',
                name: '管理书籍',
                component: ManageBook,
            },
            {
                path: '/addbook',
                name: '增加书籍',
                component: AddBook,
            }
        ]
    },
    {
        path: '/updatebook',
        name: '修改书籍',
        component: UpdateBook,
        show: false
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router


