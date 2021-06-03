// window.onload = function() {
//     let mainForm = document.querySelector("#banner");
//     console.log(mainForm);

//     mainForm.addEventListener("submit", function(e) {
//         let banner = mainForm.banner;

//         ban = new Array(2);
//         ban[0] = "/images/banner/b1.jpg";
//         ban[0] = "/images/banner/b2.jpg";
//         let contador = 0;
//         let timer = 2000;

//         function banner(){
//             contador ++;
//             contador= contador % 2;
//             document.banner.src = ban[contador];
//             setTimeout("banner()", timer);
//         }

//     }
window.onload = function() {
    window.addEventListener("load", start)

    let time = 2000
    let currentImageIndex = 0
    let img = document.querySelectorAll("#banner img")
    let max = img.length
    
    function nextImage() {
      img[currentImageIndex].classList.remove("selected")
    
      currentImageIndex ++
    
      if(currentImageIndex >= max)
        currentImageIndex = 0
    
        img[currentImageIndex].classList.add("selected")
    
    }
    
    function start() {
      setInterval(() => {
        nextImage()
      }, time)
    }
    
}