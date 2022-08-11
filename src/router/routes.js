const routes = [
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "signup" */ "../views/SignUp.vue"),
    },
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    },
    {
        path: "/forgot-password",
        name: "forgot_password",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/ForgotPassword.vue"),
      },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
      children: [
        {
          path: "companies-list",
          name: "companies-list",
          component: () => import("../views/dashboard/CompaniesList.vue"),
        },
        {
          path: "entity",
          name: "entity",
          component: () => import("../views/dashboard/Entity.vue"),
        },
      ],
    },
];

export default routes
