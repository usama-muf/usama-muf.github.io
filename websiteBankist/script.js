'use strict';
//Event Delegation: When button is clicked the link wont change
//and the content is directed to that secton

/*
      sliderBtnRight.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector('.slide--1').classList.toggle('testimonial--active');
        //document.querySelector('.slide--2').classList.toggle('testimonial--active');
        document.querySelector('.slide--3').classList.toggle('testimonial--active');

      });
      const allSlide = document.querySelectorAll('.slide');
      allSlide.forEach(slide => sliderBtnRight.addEventListener('click',function(){
        slide.classList.toggle('testimonial--active')}));
*/

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const allSection = document.querySelectorAll('.section');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>
  btn.addEventListener('click', function (event) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behaviour: 'smooth',
      });
    }
  });

////////////////////////////////
//Operations tab///
///////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  //tabContent.forEach(content => content.classList.add(`operations__content--${btnNo}`));
  //tabContent.classList.add(`operations__content--${btnNo}`);
});

///////////////////////////////////////////////////////////////////
// header fade out animation
///////////////////////////////////////////////////////////////////
const handleHoverNav = function (event) {
  //, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const siblings = event.target
      .closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = event.target.closest('.nav').querySelector('img');

    siblings.forEach(ele => {
      if (ele !== event.target) ele.style.opacity = this; //opacity;
    });
    logo.style.opacity = this; // opacity;
  }
};

nav.addEventListener(
  'mouseover',
  handleHoverNav.bind(0.5) //function (event) {
  //handleHoverNav(event, .5);}
);

nav.addEventListener(
  'mouseout',
  handleHoverNav.bind(1) // function (event) {
  //handleHoverNav(event, 1);}
);

////////////////////////////////////////////////////////////
// Sticky Navbar    i)
///////////////////////////////////////////////////////////
//This method is outdated and memory intensive
/*const section1 = document.querySelector('#section--1');
const coordinates = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > coordinates.top)
    nav.classList.add('sticky');
});
*/

/////////////////////////////////////////////////
//sticky Navbar   ii) using IntersectionObserver Api
/////////////////////////////////////

const heightNav = nav.getBoundingClientRect().height;
//console.log(heightNav);

const observeFn = function (entrys) {
  //or you can use for each method
  const [entry] = entrys;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const observer = new IntersectionObserver(observeFn, {
  root: null,
  threshold: 0,
  rootMargin: `-${heightNav}px`,
});
//takes two parameters i) callback function ii) object containing root, threshold, rootmargin
observer.observe(header);

///////////////////////////////////////////////////////
//section animation
//////////////////////////////////////////////////////
/*const revealSection = function (entrys, observer) {
  const [entry] = entrys;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);

  //console.log(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
*/
////////////////////////////////////////////////////
//working on image animation
////////////////////////////////////////////////////
const lazyImg = document.querySelectorAll('img[data-src]');

const imageObs = function (entrys, observer) {
  const [entry] = entrys;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imageObs, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});
lazyImg.forEach(img => imageObserver.observe(img));

/////////////////////////////////////////////////////
//Slider
///////////////////////////////////////////////////
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const sliderBtnLeft = document.querySelector('.slider__btn--left');

slider.style.transform = 'scale (0.1) translateX(-80%)';
slider.style.overflow = 'visible';
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

let totalSlidesCount = slides.length;
let currSlide = 0;

const goToSlide = function (slideNumber) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
  );
};

const nextSlide = function () {
  if (currSlide >= totalSlidesCount - 1) currSlide = 0;
  else currSlide++;

  goToSlide(currSlide);
};
const previousSlide = function () {
  if (currSlide <= 0) currSlide = totalSlidesCount - 1;
  else currSlide--;

  goToSlide(currSlide);
};

sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', previousSlide);
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') nextSlide();
  else if (event.key === 'ArrowLeft') previousSlide();
  else return;
});

//creating dots
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insetAdjacentHTML(
      'beforeend',
      `<div class="dots" data-slide = ${i}></div>`
    );
  });
};

createDots();
