export const CONFIG = {
  proyectName: "SPA PROYECT",
  version: "1.0.0",
  routes: {
    home: {
      component: "home.js",
      path: "/",
      title: "Inicio",
      description: "Bienvenido a esta SPA sin frameworks!"
    },
    about: {
      component: "about.js",
      path: "/about",
      title: "Acerca de nosotros",
      description: "Conoce sobre nuestro proyecto!"
    },
    contact: {
      component: "contact.js",
      path: "/contact",
      title: "Contáctanos",
      description: "Quieres comunicarte con nosotros? Hazlo aquí!"
    },
    catalog: {
      component: "catalog.js",
      path: "/catalog",
      title: "Catálogo",
      description: "Mira nuestros productos!"
    }
  }
};
