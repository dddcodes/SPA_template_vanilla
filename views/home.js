import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import videoCard from "../components/videoCard.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.updatePageTitle(actualView.title);
  

  return `
        <div class="titleBox">
          Bienvenido a ${CONFIG.proyectName}!
        </div>
        <p class="llamativeBox">ESTO ES UNA PLANTILLA DE OLIVARES EN DESARROLLO...</p>
        <p class="basicBox">Estas cajas son de demostracion de los estilos responsive-Design de esta plantilla...</p>
        <p class="basicBoxOnlyBorder">Esto es un mini proyecto del tipo Single-Page Application (S.P.A) Open Source en latino</p>
        <p>Esta plantilla tambien incluye estilos web CSS vanilla responsive-Design y extras como tarjetas de video y </p>

        <button class="button">Boton por defecto</button>
        <button class="button alt">Boton alternativo</button>
        <button class="button onlyBorder">Boton de solo borde</button>

        <input type="text" class="input" placeholder="Input por defecto">
        <input type="password" class="input" placeholder="Password por defecto">

        <div class="catalog-container">
            ${videoCard("estres")}
        </div>
        
    `;
};
