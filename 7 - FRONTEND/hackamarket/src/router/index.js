import Vue from "vue";
import VueRouter from "vue-router";
/* import Login from "../views/Login.vue"; */
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

//IMPORTO SWAL
import Swal from "sweetalert2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      //RUTA PÚBLICA
      allowAnonymous: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      //RUTA PÚBLICA
      allowAnonymous: true,
    },
  },
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/Productos.vue"),
    meta: {
      //RUTA PRIVADA
      allowAnonymous: false,
    },
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: () => import("../views/Clientes.vue"),
    meta: {
      //RUTA PRIVADA - SÓLO ADMIN
      allowAnonymous: false,
      allowNoAdmin: false,
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        next({
          path: "/productos",
          query: { redirect: to.fullPath },
        });
        Swal.fire({
          //MOSTRAR MENSAJE CON LA INFORMACIÓN
          icon: "success",
          title: `Lo sentimos,no tienes permisos para acceder a esta página`,
          showConfirmButton: false,
          timer: 2000,

          /*       confirmButtonText: "Ok", */
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      //RUTA PRIVADA
      allowAnonymous: false,
    },
  },
  {
    path: "/add-client",
    name: "AddClient",
    component: () => import("../views/AddClients.vue"),
    meta: {
      //RUTA PRIVADA - SÓLO ADMIN
      allowAnonymous: false,
      allowNoAdmin: false,
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        next({
          path: "/productos",
          query: { redirect: to.fullPath },
        });
        Swal.fire({
          //MOSTRAR MENSAJE CON LA INFORMACIÓN
          icon: "success",
          title: `Lo sentimos,no tienes permisos para acceder a esta página`,
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        next();
      }
    },
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// COMPROBANDO CADA PÁGINA POR SI LA PERSONA ESTÁ LOGUEADA

router.beforeEach((to, from, next) => {
  // SI LA RUTA ES PRIVADA Y LA PERSONA NO TIENE TOKEN
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
    Swal.fire({
      //MOSTRAR MENSAJE CON LA INFORMACIÓN
      icon: "success",
      title: `Lo sentimos,no tienes permiso para acceder a esta página`,
      showConfirmButton: false,
      timer: 2000,
    });
  } else {
    next();
  }
});

export default router;
