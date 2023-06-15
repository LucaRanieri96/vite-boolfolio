import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: "/:pathMatch(.*)*", 
      name: "404NotFound", 
      component: NotFound },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/project/:slug",
      name: "single-project",
      component: SingleProjectView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
  ],
});

export { router };
