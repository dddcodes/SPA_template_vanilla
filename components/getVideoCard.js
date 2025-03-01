import { videosData } from "../data/videos.js";
import getCategoryName from "./getCategoryName.js";

export default (specificCategory) => {
  let video;
  let random;
  if (specificCategory) {
    //se buscan videos con una categoria, y se elige uno al azar
    console.log("Categoria especifica seleccionada: " + specificCategory);

    let potentialVideos = videosData.filter(
      (video) => video.category === specificCategory
    );
    random = Math.floor(Math.random() * potentialVideos.length);
    video = potentialVideos[random];
  } else {
    random = Math.floor(Math.random() * videosData.length);
    video = videosData[random];
  }

  return `
  <div class="video-card">

    <img class="thumbnail" src="https://i.ytimg.com/vi/p4GUuATceC0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCN9YZlOtKAvNevEJLasEBHEgX6kw">
    </img>

    <div class="video-info">

      <div class="text-info">

        <div class="title">
          ${video.title}
        </div>

        <div class="category">
          ${getCategoryName(video.category)}
        </div>
        <span class="link">${video.url}</span>
            
      </div>

    </div>
    
  </div>
    `;
};
