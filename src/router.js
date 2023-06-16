import { createRouter, createWebHistory } from "vue-router";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import ProjectsView from "./views/ProjectsView.vue"
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: "/:pathMatch(.*)*", 
      name: "404NotFound", 
      component: NotFound },
    {
      path: "/project/:slug",
      name: "single-project",
      component: SingleProjectView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/",
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
