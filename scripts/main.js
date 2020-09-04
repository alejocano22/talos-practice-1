/* eslint-disable no-unused-vars */
const welcomeImage = document.querySelector('.welcome');
const sections = document.querySelectorAll('section');
const mobileNav = document.querySelector('.mobile-nav');
const mainNavLinks = document.querySelectorAll('.main-nav-link');
const memberBars = document.querySelectorAll('.member-bar');
const workModals = document.querySelectorAll('.work-modal');
const answers = document.querySelectorAll('.answer');
const testimonialSlideItems = document.querySelectorAll('.testimonial-slide-item');
const testimonialButtonsMobile = document.querySelectorAll('.testimonial-buttons-mobile span');
const testimonialButtons = document.querySelectorAll('.testimonial-buttons span');

// Array of welcome images
const welcomeImages = [];
welcomeImages[0] = 'url("images/home-bg.jpg") center/cover no-repeat border-box';
welcomeImages[1] = 'url("images/home-bg-2.jpg") center/cover no-repeat border-box';

// Index of the welcome image
let imageIndex = 0;

// To change welcome image
function changeWelcomeImage() {
  if (imageIndex === (welcomeImages.length - 1)) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }
  welcomeImage.style.background = welcomeImages[imageIndex];
}

// Sections map
const sectionsArray = ['welcome', 'services', 'about', 'team', 'portfolio', 'blog', 'contact'];

// To hide all active buttons in the nav bar
function hideAllNavActive() {
  mainNavLinks.forEach((button) => {
    button.classList.remove('nav-item-active');
  });
}

// Interval id
let imageInterval;

// Options for the observer
const options = {
  root: null,
  threshold: 0.50,
  rootMargin: '0px',
};

// To observe all sections in the screen
const observer = new IntersectionObserver(((entries) => {
  entries.forEach((entry) => {
    const index = sectionsArray.indexOf(entry.target.id);
    if (!entry.isIntersecting || index === -1) {
      return;
    }
    if (index === 0) {
      imageInterval = setInterval(changeWelcomeImage, 4000);
    } else {
      clearInterval(imageInterval);
    }
    hideAllNavActive();
    mainNavLinks[index].classList.add('nav-item-active');
  });
}), options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// To open/close mobile nav modal
function handleMobileBar() {
  if (mobileNav.classList.contains('mobile-nav-open')) {
    mobileNav.classList.remove('mobile-nav-open');
  } else {
    mobileNav.classList.add('mobile-nav-open');
  }
}

// To show member bar
function showMemberBar(index) {
  memberBars[index].classList.add('member-bar-open');
}

// To remove member bar
function removeMemberBar(index) {
  memberBars[index].classList.remove('member-bar-open');
}

// To show work modal
function showWorkModal(index) {
  workModals[index].classList.add('work-modal-open');
}

// To show work modal
function removeWorkModal(index) {
  workModals[index].classList.remove('work-modal-open');
}

// To know what was the last opened answer and close it
let lastAnswer = 0;

// To open/close the answer
function handleAnswer(index) {
  if (answers[index].classList.contains('show-answer')) {
    answers[index].classList.remove('show-answer');
  } else {
    answers[lastAnswer].classList.remove('show-answer');
    lastAnswer = index;
    answers[index].classList.add('show-answer');
  }
}

// To know what was the last opened slide and close it in mobile
let lastSlideIndexMobile = 0;

// To show testimonial slides mobile
function showSlideMobile(index) {
  testimonialSlideItems[lastSlideIndexMobile].classList.remove('show-slide-mobile');
  testimonialButtonsMobile[lastSlideIndexMobile].classList.remove('testimonial-button-active');
  lastSlideIndexMobile = index;
  testimonialSlideItems[index].classList.add('show-slide-mobile');
  testimonialButtonsMobile[index].classList.add('testimonial-button-active');
}

// To know what was the last opened slide and close it in Tablet and Desktop
let lastSlideIndex = 0;

// To show testimonial slides mobile (Tablet and Desktop)
function showSlide(index) {
  testimonialSlideItems[lastSlideIndex * 2].classList.remove('show-slide');
  testimonialSlideItems[(lastSlideIndex * 2) + 1].classList.remove('show-slide');
  testimonialButtons[lastSlideIndex].classList.remove('testimonial-button-active');
  lastSlideIndex = index;
  testimonialSlideItems[index * 2].classList.add('show-slide');
  testimonialSlideItems[(index * 2) + 1].classList.add('show-slide');
  testimonialButtons[index].classList.add('testimonial-button-active');
}

// Prevent default in the touch form
function prevent(event) {
  event.preventDefault();
}
