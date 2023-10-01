"use strict";
$(".trip-gallery").slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: "linear",
	autoplay: true,
	autoplaySpeed: 1500,
});

const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});
