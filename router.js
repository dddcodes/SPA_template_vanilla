import { CONFIG } from "./config.js";

const ROUTE = CONFIG.routes; // Obtiene las rutas desde el archivo de configuración

export const router = async () => {
  const app = document.querySelector("#app");
  const navBar = document.querySelector("#navigationBar");

  // Truco para reiniciar la animación de #app
  app.style.visibility = "hidden";
  setTimeout(() => {
    app.classList.remove("animated");
    void app.offsetWidth;
    app.classList.add("animated");
    app.style.visibility = "visible";
  }, 500);

  if (navBar.classList.contains("show")) navBar.classList.remove("show");

  const routes = {
    "/index.html": () => import(`./views/${ROUTE.home.component}`), //inicio
    "/": () => import(`./views/${ROUTE.home.component}`), //inicio
    "/about": () => import(`./views/${ROUTE.about.component}`), //sobre nosotros
    "/contact": () => import(`./views/${ROUTE.contact.component}`), //contacto
    "/catalog": () => import(`./views/${ROUTE.catalog.component}`), //catalogo
  };

  const view =
    routes[window.location.pathname] ||
    (() => `<h1>404 - Página no encontrada</h1>`);

  app.innerHTML = await (await view()).default();
};

export const navigateTo = (url) => {
  history.pushState(null, null, url); // Cambia la URL sin recargar la página
  router(); // Llama al router para actualizar la vista
};

// Detecta cuando el botón "atrás" del navegador es activado
window.addEventListener("popstate", router);
