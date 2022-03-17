function menuOpen() {

 let menu = document.getElementById("mainMenu");
 let y = document.getElementById("menuClose");
 let z = document.getElementById("menuOpen");

 if (menu.className === "main_menu_768") {
   menu.classList.remove("main_menu_768");
   y.style.display = "block";
   z.style.display = "none";
 }
 else {
   menu.classList.add("main_menu_768");
   y.style.display = "none";
   z.style.display = "block";
 }
 }

var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_1_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

/* Индекс слайда по умолчанию */
showSlides2(slideIndex2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    showSlides2(slideIndex2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide2() {
    showSlides2(slideIndex2 -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide2(n2) {
    showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
    let i;
    let slides2 = document.getElementsByClassName("item_2");
    let dots2 = document.getElementsByClassName("slider-dots_2_item");
    if (n2 > slides2.length) {
      slideIndex2 = 1
    }
    if (n2 < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active_2", "");
    }
    slides2[slideIndex2 - 1].style.display = "flex";
    dots2[slideIndex2 - 1].className += " active_2";
}

/* Индекс слайда по умолчанию */
showSlides3(slideIndex3);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide3() {
    showSlides3(slideIndex3 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide3() {
    showSlides3(slideIndex3 -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide3(n3) {
    showSlides3(slideIndex3 = n3);
}

function showSlides3(n3) {
    let i;
    let slides3 = document.getElementsByClassName("item_3");
    let dots3 = document.getElementsByClassName("slider-dots_3_item");
    if (n3 > slides3.length) {
      slideIndex3 = 1
    }
    if (n3 < 1) {
        slideIndex3 = slides3.length
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active_3", "");
    }
    slides3[slideIndex3 - 1].style.display = "flex";
    dots3[slideIndex3 - 1].className += " active_3";
}


/* Индекс слайда по умолчанию */
showSlides4(slideIndex4);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide4() {
    showSlides4(slideIndex4 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide4() {
    showSlides4(slideIndex4 -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide4(n4) {
    showSlides4(slideIndex4 = n4);
}

function showSlides4(n4) {
    let i;
    let slides4 = document.getElementsByClassName("item_4");
    let dots4 = document.getElementsByClassName("slider-dots_4_item");
    if (n4 > slides4.length) {
      slideIndex4 = 1
    }
    if (n4 < 1) {
        slideIndex4 = slides4.length
    }
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active_4", "");
    }
    slides4[slideIndex4 - 1].style.display = "flex";
    dots4[slideIndex4 - 1].className += " active_4";
}

function bigFoto(n) {
  let fotos = document.querySelectorAll(".certificate_img");
  let blackout = document.querySelector(".blackout");

  if (fotos[n-1].className == "certificate_img certificate_big_foto") {
    blackout.classList.remove("blackout_active");
    fotos[n-1].classList.remove("certificate_big_foto");

  }
  else {
    blackout.classList.add("blackout_active");
    fotos[n-1].classList.add("certificate_big_foto");
  }
}

function faqQuestion(n) {
  let question = document.querySelectorAll(".faq_question");

  if (question[n-1].className == "faq_question faq_question_active") {
    question[n-1].classList.remove("faq_question_active");
  }
  else {
    question[n-1].classList.add("faq_question_active");
  }
}

function formHidden() {
  let form = document.querySelector(".form_hidden_container");

  if (form.className == "form_hidden_container form_hidden_container_active") {
    form.classList.remove("form_hidden_container_active");
  }
  else {
    form.classList.add("form_hidden_container_active");
  }
}

/*
function thanks() {
  let form = document.querySelector(".thanks_container");

  if (form.className == "thanks_container thanks_container_active") {
    form.classList.remove("thanks_container_active");
  }
  else {
    form.classList.add("thanks_container_active");
  }
}
*/

function feedback() {
  let form = document.querySelector(".feedback_container");

  if (form.className == "feedback_container feedback_container_active") {
    form.classList.remove("feedback_container_active");
  }
  else {
    form.classList.add("feedback_container_active");
  }
}
