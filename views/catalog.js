import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import getVideoCard from "../components/getVideoCard.js";

const actualView = CONFIG.routes.catalog;

export default () => {
  u.updatePageTitle(actualView.title);

  return `
        <div class="titleBox">
            ${actualView.title}
        </div>
        <p>${actualView.description}</p>
        
        <div class="basicBox OnlyBorder">
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
        </div>
    `;
};
