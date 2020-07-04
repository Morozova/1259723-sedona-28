var selectionHotel = document.querySelector(".form-call-button");
var formPopup = document.querySelector(".form-container");
var searchForm = document.querySelector(".search-form");
var checkinInput = document.querySelector(".checkin-input");
var checkoutInput = document.querySelector(".checkout-input");

selectionHotel.addEventListener("click", function () {
  formPopup.classList.toggle("modal-show");
});

searchForm.addEventListener("submit", function (evt) {
  if (!checkinInput.value || !checkoutInput.value) {
    evt.preventDefault();
  }
});




