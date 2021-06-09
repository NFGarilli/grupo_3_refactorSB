window.onload = function() {
      let time = 4000;
      let currentImageIndex = 0;
      let img = document.querySelectorAll("#banner img");
      let max = img.length;
  
      function nextImage() {
        img[currentImageIndex].classList.remove("selected");

        if(currentImageIndex >= (max-1)){
            currentImageIndex = 0;
            img[currentImageIndex].classList.add("selected");
        } else {
            currentImageIndex ++;
            img[currentImageIndex].classList.add("selected");
        }
      }

      setInterval(() => {
        nextImage();
      }, time)
}
