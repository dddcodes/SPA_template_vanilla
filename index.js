import { router, navigateTo } from "./router.js";
import { CONFIG } from "./config.js";

document.querySelector("body").innerHTML = `

    <nav id="navigationBar">
        <a href="/" data-link>${CONFIG.routes.home.title}</a>
        <a href="/about" data-link>${CONFIG.routes.about.title}</a>
        <a href="/contact" data-link>${CONFIG.routes.contact.title}</a>
    </nav>

    <div id="app"></div>
    
`; // Crea la barra de navegación y el contenedor de la aplicación

// ==> cosas para lo del router
document.addEventListener("DOMContentLoaded", () => {
  router(); // Cargar la vista según la URL actual (no funciona parece ser)

  // Captura los clics en los enlaces internos para evitar recargar la página
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href); // Usa navigateTo() para cambiar la vista
    }
  });
});

// ==> Detecta cuando el usuario usa el botón de "atrás" del navegador
window.addEventListener("popstate", router);

// ==> COSAS INFORMATIVAS / INUTILES =========================================================

console.log(CONFIG);

// ========================================================
