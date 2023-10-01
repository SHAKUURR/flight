"use strict";
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};
// Array of state names
const stateNames = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
];

// Get the select element
const selectElement = document.getElementById("from");

// Populate the select element with options
stateNames.forEach((state) => {
	const option = document.createElement("option");
	option.value = state;
	option.textContent = state;
	selectElement.appendChild(option);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const proceed = document.querySelector(".proceed");

const handleclick = function (e) {
	e.preventDefault();
	Swal.fire({
		title: "Please Note",
		html: `<p classname="message">Kindly make payment Using BTC. copy the wallet address and make payment <br><br> $shakur<p>`,
		icon: "info",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, I've paid!",
		customClass: {
			container: "custom-swal-modal-container",
			message: "custom-swal-modal-message",
		},
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire("Congratulations!", "You're one step ahead...", "success");
		}
	});
};

proceed.addEventListener("click", handleclick);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const choiceBoxes = document.querySelectorAll(".choice-box");

// Add click event listeners to each choice box
choiceBoxes.forEach((box, index) => {
	box.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		updateAmount(index);
	});
});

function updateAmount(choiceIndex) {
	const choiceBoxes = document.querySelectorAll(".choice-box");

	choiceBoxes.forEach((box) => {
		const amountElement = box.querySelector(".amount");
		amountElement.textContent = "";
	});
	const selectedChoiceBox = choiceBoxes[choiceIndex];
	const priceElement = selectedChoiceBox.querySelector(".price");
	const price = priceElement.textContent;
	const amountElement = selectedChoiceBox.querySelector(".amount");
	amountElement.textContent = `${price}`;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select all input fields by their ID names
var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var addressInput = document.getElementById("address");
var fromSelect = document.getElementById("from");
var flytoInput = document.getElementById("flyto");
var departureInput = document.getElementById("departure");
var returnInput = document.getElementById("return");
