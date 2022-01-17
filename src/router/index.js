import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddSmoothie from "../components/AddSmoothie";
import EditSmoothie from '@/components/EditSmoothie';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie,
  },
  {
    path: "/edit-smoothie/:smoothie_slug",
    name: "EditSmoothie",
    component: EditSmoothie,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
