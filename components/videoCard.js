import { videosData } from "../data/videos.js";


export default (specificCategory) => {
  const video = videosData.find(video => video.category === "estres")

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
          ${video.title}
        </div>

        <div class="author">
          ${video.category} • 
          <span class="date">${video.url}</span>
        </div>
            
      </div>

    </div>
    
  </div>
    `;
};
