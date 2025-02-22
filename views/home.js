import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <h1>Bienvenido a ${CONFIG.proyectName}!</h1>
        <p>${actualView.description}</p>
    `;
};
