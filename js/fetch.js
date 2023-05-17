function obtenerImagenesDesdeJSON() {
    fetch('../api/api.json')
      .then(response => response.json())
      .then(data => {
        const imagesContainer = document.getElementById('images-container');
  
        data.images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image.url;
          imgElement.alt = image.title;
          imgElement.classList.add('image');
          imagesContainer.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  obtenerImagenesDesdeJSON();
  