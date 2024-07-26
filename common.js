var barDisplay = true;
var call1 = true;
function showSidebar() {
    const sbar = document.querySelector(".nav ul");
    if (sbar.style.display == "none")
        barDisplay = true;
    if (barDisplay) {
        sbar.style.display = "block";
        barDisplay = false;
    } else {
        sbar.style.display = "none";
        barDisplay = true;
    }
}



const slides = document.querySelectorAll(".slides");
var count = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;

    }
)
const n = slides.length;
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        }
    )
}
const goPrev = () => {
    count = Math.abs((count - 1) % n);
    slideImage();
}
const goNext = () => {
    count = (count + 1) % n;
    slideImage();
}