document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('slides');
    children = slides.children;

    setInterval(nextSlide, 5000);
});

var i = 0;

function nextSlide() {
    children[i].classList.toggle('active'); 
    i += 1;
    if (i >= children.length)
        i = 0;
    children[i].classList.toggle('active'); 
}


