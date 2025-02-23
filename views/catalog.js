import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.contact;

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <div class="titleBox">
            ${actualView.title}
        </div>
        <p>${actualView.description}</p>
    `;
};
