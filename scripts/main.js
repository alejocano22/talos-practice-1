/* eslint-disable no-unused-vars */
const welcomeImage = document.querySelector('.welcome');
const sections = document.querySelectorAll('section');
const mobileNav = document.querySelector('.mobile-nav');
const mainNavLinks = document.querySelectorAll('.main-nav-link');
const memberBars = document.querySelectorAll('.member-bar');
const workModals = document.querySelectorAll('.work-modal');

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
const sectionsMap = new Map();
sectionsMap.set('welcome', 0);
sectionsMap.set('services', 1);
sectionsMap.set('about', 2);
sectionsMap.set('team', 3);
sectionsMap.set('portfolio', 4);
sectionsMap.set('blog', 5);
sectionsMap.set('contact', 6);

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
    const index = sectionsMap.get(entry.target.id);
    if (!entry.isIntersecting || typeof index === 'undefined') {
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

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const testimonialButtons = document.querySelectorAll('.testimonial-buttons button');
const testimonialButtonsMobile = document.querySelectorAll('.testimonial-buttons-mobile button');
const testimonialSlideItems = document.querySelectorAll('.testimonial-slide-item');
const touchForm = document.querySelector('.touch-form');

// To hide all answers
function hideAnswers() {
  answers.forEach((answer) => {
    answer.classList.remove('show-answer');
  });
}

// To display/close an answer
function displayAnswer() {
  for (let i = 0; i < questions.length; i += 1) {
    questions[i].addEventListener('click', () => {
      if (answers[i].classList.contains('show-answer')) {
        answers[i].classList.remove('show-answer');
      } else {
        hideAnswers();
        answers[i].classList.add('show-answer');
      }
    });
  }
}

// To hide all slides and active buttons mobile
function hideAllTestimonialSlidesMobile() {
  testimonialSlideItems.forEach((slide) => {
    slide.classList.remove('show-slide-mobile');
  });
  testimonialButtonsMobile.forEach((button) => {
    button.classList.remove('testimonial-button-active');
  });
}

// To display slide mobile
function displayTestimonialSlideMobile() {
  for (let i = 0; i < testimonialButtonsMobile.length; i += 1) {
    testimonialButtonsMobile[i].addEventListener('click', () => {
      hideAllTestimonialSlidesMobile();
      testimonialSlideItems[i].classList.add('show-slide-mobile');
      testimonialButtonsMobile[i].classList.add('testimonial-button-active');
    });
  }
}

// To hide all slides and active buttons (Tablet and Desktop)
function hideAllTestimonialSlides() {
  testimonialSlideItems.forEach((slide) => {
    slide.classList.remove('show-slide');
  });
  testimonialButtons.forEach((button) => {
    button.classList.remove('testimonial-button-active');
  });
}

// To display slide (Tablet and Desktop)
function displayTestimonialSlide() {
  for (let i = 0; i < testimonialButtons.length; i += 1) {
    testimonialButtons[i].addEventListener('click', () => {
      hideAllTestimonialSlides();
      testimonialSlideItems[i * 2].classList.add('show-slide');
      testimonialSlideItems[(i * 2) + 1].classList.add('show-slide');
      testimonialButtons[i].classList.add('testimonial-button-active');
    });
  }
}

// To prevent default in the touch form
touchForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

// Call display answer
displayAnswer();

// Call display slide mobile
displayTestimonialSlideMobile();

// Call display slide (Tablet and Desktop)
displayTestimonialSlide();
