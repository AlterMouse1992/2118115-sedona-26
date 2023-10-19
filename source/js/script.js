let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--noJS');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});






/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider__item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let IndexSlide = 1;
/* Вызываем функцию, которая реализована ниже: */
showNewSlides(IndexSlide);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextPlanSlide() {
  showNewSlides(IndexSlide += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousPlanSlide() {
  showNewSlides(IndexSlide -= 1);
}

/* Устанавливаем текущий слайд: */
function currentPlanSlide(n) {
  showNewSlides(IndexSlide = n);
}

/* Функция перелистывания: */
function showNewSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let elems = document.getElementsByClassName("slider-plan__item");

    /* Проверяем количество слайдов: */
    if (n > elems.length) {
      IndexSlide = 1
    }
    if (n < 1) {
      IndexSlide = elems.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let elem of elems) {
        elem.style.display = "none";
    }
    /* Делаем элемент блочным: */
    elems[IndexSlide - 1].style.display = "block";
}



let modalWindow = document.querySelector('.modal');
let modalToggle = document.querySelector('.main-footer__button');
let modalCloseToggle = document.querySelector('.modal__close-button');
let modalCloseModal = document.querySelector('.modal')

modalToggle.addEventListener('click', function () {
  if (modalWindow.classList.contains('modal--close')) {
    modalWindow.classList.remove('modal--close');
    modalWindow.classList.add('modal--open');
  } else {
    modalWindow.classList.add('modal--close');
    modalWindow.classList.remove('modal--open');
  }
});

modalCloseToggle.addEventListener('click', function(){
  if (modalWindow.classList.contains('modal--open')){
    modalWindow.classList.remove('modal--open');
    modalWindow.classList.add('modal--close')
  }
});


document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') {
    modalWindow.classList.remove('modal--open');
    modalWindow.classList.add('modal--close')
  }
})


// Слайдер галереи



/* Устанавливаем стартовый индекс слайда по умолчанию: */
let galIndexSlide = 1;
/* Вызываем функцию, которая реализована ниже: */
showNewSlidesGal(galIndexSlide);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextGalSlide() {
  showNewSlidesGal(galIndexSlide += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousGalSlide() {
  showNewSlidesGal(galIndexSlide -= 1);
}

/* Устанавливаем текущий слайд: */
function currentGalSlide(n) {
  showNewSlidesGal(galIndexSlide = n);
}

/* Функция перелистывания: */
function showNewSlidesGal(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let images = document.getElementsByClassName("gallery-slider__item");

    /* Проверяем количество слайдов: */
    if (n > images.length) {
      galIndexSlide = 1
    }
    if (n < 1) {
      galIndexSlide = images.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let image of images) {
        image.style.display = "none";
    }
    /* Делаем элемент блочным: */
    images[galIndexSlide - 1].style.display = "block";
}