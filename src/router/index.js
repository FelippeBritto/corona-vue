import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/Home";
import SignUp from "../views/SignUp"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/registrar",
    name: "signUp",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
