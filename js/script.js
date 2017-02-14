
var feedback = document.querySelector(".right-column .btn");
var popup = document.querySelector(".popup-write-us");
var close = document.querySelector(".popup-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var cart = document.querySelector(".product-and-makers-btn .buy");
var CartPopup = document.querySelector(".popup-cart");


feedback.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-write-us-show");
	login.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-write-us-show");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !email.value) {
		event.preventDefault();
		console.log("Нужно ввести имя и e-mail");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup-write-us-show")) {
		popup.classList.remove("popup-write-us-show");
	}
	}
});

cart.addEventListener("click", function(event) {
	event.preventDefault();
	CartPopup.classList.add("popup-cart-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	CartPopup.classList.remove("cart-show");
});
