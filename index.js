import { router, navigateTo } from "./router.js";
import { CONFIG } from "./config.js";
import getNavBar from "../components/navBar.js";
import { videosData } from "./data/videos.js";

getNavBar(); // Carga la barra de navegación

// ==> cosas para el botón de navegación (dispositivos moviles)
document
  .getElementById("navigationButton")
  .addEventListener("click", function () {
    document.getElementById("navigationBar").classList.toggle("show");
  });

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
console.log(videosData.find(video => video.category === "estres"))

// ========================================================
