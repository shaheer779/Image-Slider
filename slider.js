//Making a slider
const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
//counter
let counter = 1;
//size
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener("click", function() {
	if(counter >= images.length - 1)return; 
	carouselSlide.style.transition = "transform 0.6s linear";
	counter++;
	carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});
prevBtn.addEventListener("click", function() {
	if(counter <= 0)return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--; 
	carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

//making slider go in a loop 
carouselSlide.addEventListener("transitionend", ()=> {
	if(images[counter].id === 'lastClone') {
		carouselSlide.style.transition = "none";
		counter = images.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if(images[counter].id === 'firstClone') {
		carouselSlide.style.transition = "none";
		counter = images.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});
