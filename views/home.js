import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <div class="titleBox">
          Bienvenido a ${CONFIG.proyectName}!
        </div>
        <p>${actualView.description}</p>
    `;
};
