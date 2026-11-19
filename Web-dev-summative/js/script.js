const images = [
    "../media/images/perfumes.png",
    "../media/images/home1.png",
    "../media/images/home2.png",
    "../media/images/home3.png",
    "../media/images/home5.png"
];

let currentImage = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    slideshow.src = images[currentImage];

}, 4000);
