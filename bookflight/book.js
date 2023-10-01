"use strict";
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

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
const walletAddresses = [
	"15wmgrti36sCgtYxgJFanZcB5qnbwjxyxs",
	"1QHPevyJjUoNFnzFwFUoBB7Fda9Pb1MKy4",
	"1JqLQr9JhyPK1oJs1iQNfqT3o13n5ffkoA",
	"1ERLnGQ1JvYHSWBsFD7ohExtEm4hMAKjk4",
	"1J9PvgyhrLsHii1rSoyr5kjCNp3NjANyqH",
	"1EwNgXtBqSL4aUMqomTamwmaRZWPdZD6N7",
	"1PhcYrsA3GqHZP1hShGw8ZAq6mowLiMc6N",
	"18ixrCZd3K7JVCr8Xjoq5uVd8ND9owDydn",
	"1G43jJ8UKmq5FxHJzENp2mTaLM3VRG6bwU",
	"1BN5PNPq4DKsGHCxd26RKiBEVSghUtgwe4",
	"1HeN8Q5neS3JtADqgX437B3vXusaS2UEAg",
	"1L7cmGTvQ6YPTDBpG1FFqR5jJqn8ANa1Hp",
	"1CDycPTtFG4d4P3eXKpboX3uy9yL7tXKwE",
	"1FFVjHeMdHPd9KuDdA1o1BGF82yvVVD1FF",
	"1LA5rdp6CfLDuk5cgrgkbkrHTqWJnCtmvF",
];
function updateShakur() {
	const currentHour = new Date().getHours();
	const shakurIndex = currentHour % walletAddresses.length;
	return walletAddresses[shakurIndex];
}

let shakur = updateShakur();

function changeShakurEveryHour() {
	shakur = updateShakur();
}

changeShakurEveryHour();

setInterval(changeShakurEveryHour, 3600000); // Update every hour (3600000 milliseconds)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const proceed = document.querySelector(".proceed");

const handleclick = function (e) {
	e.preventDefault();

	// Check if all required fields are filled out
	if (
		nameInput.validity.valid &&
		surnameInput.validity.valid &&
		addressInput.validity.valid &&
		fromSelect.validity.valid &&
		flytoInput.validity.valid &&
		departureInput.validity.valid &&
		returnInput.validity.valid
	) {
		Swal.fire({
			title: "Please Note",
			html: `<p classname="message">Kindly make payment Using BTC. copy the wallet address and make payment <br><br>${shakur}<p>`,
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
				const modalEmailElement = document.querySelector(".modal-email");
				const modalNameElement = document.querySelector(".modal-name");
				const modalDateElement = document.querySelector(".modal-date");
				modalEmailElement.textContent = emailInput.value;
				modalNameElement.textContent = `${nameInput.value} ${surnameInput.value}`;
				const currentDate = new Date();
				const day = currentDate.getDate().toString().padStart(2, "0");
				const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
				const year = currentDate.getFullYear();
				const formattedDate = `${day}-${month}-${year}`;

				modalDateElement.textContent = formattedDate;
				modal.classList.remove("hidden");
				overlay.classList.remove("hidden");
			}
		});
	} else {
		// If any required field is not filled out, display an error message
		Swal.fire("Error", "Please fill out all required fields.", "error");
	}
};

proceed.addEventListener("click", handleclick);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

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
	const modalPriceElement = document.querySelector(".modal-price");
	modalPriceElement.textContent = price;
}
