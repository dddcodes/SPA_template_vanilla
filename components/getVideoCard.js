import { videosData } from "../data/videos.js";
import getCategoryName from "./getCategoryName.js";
import getVideoThumbnail from "./getVideoThumbnail.js";
import getVideoTitle from "./getVideoTitle.js";

export default (specificCategory) => {
  let video;
  if (specificCategory) {
    console.log("Categoria especifica seleccionada: " + specificCategory);
    video = videosData.find((video) => video.category === specificCategory);
  } else {
    let random = Math.floor(Math.random() * videosData.length);
    video = videosData[random];
  }

  return `
  <div class="video-card">

    <div class="thumbnail">
      <div class="menu">
        ⋮
        <div class="tooltip">Ver mas tarde</div>
      </div>
    </div>

    <div class="video-info">

      <div class="text-info">

        <div class="title">
          ${getVideoTitle("https://www.youtube.com/watch?v=a6LyzYV9YEk")}
        </div>

        <div class="author">
          ${getCategoryName(video.category)} • 
          <span class="date">${video.url}</span>
        </div>
            
      </div>

    </div>
    
  </div>
    `;
};
