console.log('%c HI', 'color: firebrick')
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log('json', json)
      renderDogImages(json);
    });
  }
  
  function renderDogImages(images) {
    const dogImageContainer = document.getElementById('dog-image-container')
    images.forEach(image => {
      const img = document.createElement('img')
      img.src = image
      dogImageContainer.appendChild(img)
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
  })