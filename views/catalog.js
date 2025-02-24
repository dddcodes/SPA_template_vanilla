import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import getVideoCard from "../components/videoCard.js";

const actualView = CONFIG.routes.catalog;

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <div class="titleBox">
            ${actualView.title}
        </div>
        <p>${actualView.description}</p>
        <div class="catalog-container">
            ${getVideoCard()}
            ${getVideoCard()}
            ${getVideoCard()} 
            ${getVideoCard()}
            ${getVideoCard()}
            ${getVideoCard()} 
            ${getVideoCard()}
            ${getVideoCard()}
            ${getVideoCard()} 
        </div>
    `;
};
