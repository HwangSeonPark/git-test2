const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vue', component: () => import('pages/VueEx.vue') },
      { path: '/shop', component: () => import('pages/ShoppingList.vue') },
      { path: '/todo', component: () => import('pages/Todo.vue') },
      { path: "/dbtodo", component: () => import("pages/DbTodo.vue") },
      { path: "/todotest", component: () => import("pages/Todotest.vue") },
      { path: "/dbtodotest", component: () => import("pages/DbTodotest.vue") },
      { path: "/signin", component: () => import("layouts/SignIn.vue") },
      { path: "/login", component: () => import("layouts/Login.vue") },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
