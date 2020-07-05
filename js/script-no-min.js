var selectionHotel = document.querySelector(".form-call-button");
var formPopup = document.querySelector(".form-container");
var searchForm = document.querySelector(".search-form");

selectionHotel.addEventListener("click", function () {
  formPopup.classList.toggle("modal-show");
});

selectionHotel.addEventListener("click", function () {
  formPopup.classList.toggle("animation");
});

searchForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});




