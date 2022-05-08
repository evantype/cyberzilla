import { createRouter, createWebHistory} from "vue-router";

import MainPage from "../views/MainPage";
import Users from "../views/Users";
import Registration from "../views/Registration";
import Login from "../views/Login";
import EditUser from "../views/EditUser";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },
    {
        path: '/users/:id',
        name: 'edituser',
        component: EditUser,
        props: true
    },
    {
        path: '/register',
        name: 'register',
        component: Registration
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
});
