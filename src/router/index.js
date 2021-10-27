import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home';
import servicespage from '@/views/servicespage.vue';
import contactus from '@/views/contactus.vue';
import portfolio from '@/views/portfolio.vue';
import getquote from '@/views/getquote.vue';
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/services",
      name: "Services",
      component: servicespage,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: contactus,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: portfolio,
    },
    {
      path: '/getquote',
      name: "getquote",
      component: getquote,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;