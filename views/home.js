import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import getVideoCard from "../components/videoCard.js";


const actualView = CONFIG.routes.home;

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <div class="titleBox">
          Bienvenido a ${CONFIG.proyectName}!
        </div>
        <p class="llamativeBox">${actualView.description}</p>
        <p class="basicBox">${actualView.description}</p>
        <p class="basicBoxOnlyBorder">${actualView.description}</p>
        <p>${actualView.description}</p>

        <button class="button">Boton por defecto</button>
        <button class="button alt">Boton alternativo</button>
        <button class="button onlyBorder">Boton de solo borde</button>

        <input type="text" class="input" placeholder="Input por defecto">
        <input type="password" class="input" placeholder="Password por defecto">

        <div class="catalog-container">
          ${getVideoCard()}
          ${getVideoCard()}
          ${getVideoCard()} 
        </div>
        
    `;
};
