import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.about; // Título de la página

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <h1>${actualView.title}</h1>
        <p>${actualView.description}</p>
    `;
};
