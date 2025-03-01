export default (url) => {
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (!videoId) return "ERROR BUSCANDO VIDEO";

    const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId[1]}&format=json`;

    fetch(oEmbedUrl)
        .then(response => response.json())
        .then(data => {
             return data.title; // Muestra el título
        })
        .catch(error => console.log('Error fetching oEmbed data:', error));
}