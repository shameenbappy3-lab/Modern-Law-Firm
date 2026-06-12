const prevBTN = document.querySelector(".prev-btn");
const nxtBTN = document.querySelector('.nxt-btn');
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
let setAutoTimer;


function showSlide(index){

    if(index < 0) index = slides.length - 1

    if(index >= slides.length) index = 0;

    currentIndex = index

    slides.forEach(slide => slide.classList.remove("active"));

    slides[currentIndex].classList.add("active");
}

function prevSlide(){
    showSlide(currentIndex - 1);
}

function nextSlide(){
    showSlide(currentIndex + 1)
}

function autoPlay(){
    setAutoTimer = setInterval(()=>{
        nextSlide()
    },3500)
}

function resetAutoPlay(){
    clearInterval(setAutoTimer);
    autoPlay();
};


prevBTN.addEventListener("click",()=>{
    prevSlide();
    resetAutoPlay();
})

nxtBTN.addEventListener("click",()=>{
    nextSlide();
    resetAutoPlay();
})

showSlide(currentIndex);

autoPlay();