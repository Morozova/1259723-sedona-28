var selectionHotel=document.querySelector(".form-call-button"),formPopup=document.querySelector(".form-container"),searchForm=document.querySelector(".search-form");selectionHotel.addEventListener("click",function(){formPopup.classList.toggle("modal-show")}),selectionHotel.addEventListener("click",function(){formPopup.classList.toggle("animation")}),searchForm.addEventListener("submit",function(e){e.preventDefault()});
