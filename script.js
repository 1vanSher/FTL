document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].offsetWidth;

    let position = 0;
    let lastScrollY = window.scrollY;
    let direction = -1;
    let isTransitioning = false; 

    function moveSlider() {
        let deltaY = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;

        position += deltaY * 0.5 * direction; 

        slider.style.transition = "transform 0.2s linear";
        slider.style.transform = `translateX(${position}px)`;

        if (position <= -slideWidth * 1.2 && !isTransitioning) {  
            isTransitioning = true; 
            setTimeout(() => {
                position += slideWidth;
                slider.style.transition = "none"; 
                slider.appendChild(slider.firstElementChild);
                slider.style.transform = `translateX(${position}px)`;
                setTimeout(() => {
                    slider.style.transition = "transform 0.2s linear"; 
                    isTransitioning = false;
                }, 10);
            }, 50);
        }

        if (position >= 0.2 * slideWidth && !isTransitioning) { 
            isTransitioning = true;
            setTimeout(() => {
                position -= slideWidth;
                slider.style.transition = "none";
                slider.prepend(slider.lastElementChild);
                slider.style.transform = `translateX(${position}px)`;
                setTimeout(() => {
                    slider.style.transition = "transform 0.2s linear"; 
                    isTransitioning = false;
                }, 10);
            }, 50);
        }

        requestAnimationFrame(moveSlider);
    }

    requestAnimationFrame(moveSlider);
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider2");
    const slides = document.querySelectorAll(".slide2");
    const slideWidth = slides[0].offsetWidth; 

    let position = 0;
    let lastScrollY = window.scrollY;
    let direction = -1; 

    function moveSlider() {
        let deltaY = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;

        position -= deltaY * 0.5 * direction;

        slider.style.transform = `translateX(${position}px)`;

        if (position <= -slideWidth + 100) {
            position += slideWidth;
            slider.appendChild(slider.firstElementChild);
            slider.style.transition = "none"; 
            slider.style.transform = `translateX(${position}px)`;
            setTimeout(() => slider.style.transition = "transform 0.2s linear", 10); 
        }

        if (position >= 0) {
            position -= slideWidth;
            slider.prepend(slider.lastElementChild);
            slider.style.transition = "none";
            slider.style.transform = `translateX(${position}px)`;
            setTimeout(() => slider.style.transition = "transform 0.2s linear", 10);
        }

        requestAnimationFrame(moveSlider);
    }

    requestAnimationFrame(moveSlider);
});

const slides = document.querySelectorAll('.trust-slide');
const dots = document.querySelectorAll('.dot');

let index = 0;
const step = slides[0].clientWidth;

const activeSlide = (n) =>{
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = (n) =>{
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    }else{
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    }else{
        index--;
        activeSlide(index);
        activeDot(index);
    }
}
let timer = setInterval(function(){
    nextSlide(index);
  },2000);

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () =>{
        index=indexDot;
        activeSlide(index);
        activeDot(index);
    });
});
  
  
  
