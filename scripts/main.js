const welcomeImage = document.getElementById('welcome');
const mainNavItems = document.querySelectorAll('.main-nav-item a');
const sections = document.querySelectorAll('section');
const burguerButton = document.querySelector('.burguer-button');
const mobileNav = document.querySelector('.mobile-nav');
const memberBar = document.querySelectorAll('.member-bar');
const memberBox = document.querySelectorAll('.member-box');
const workBox = document.querySelectorAll('.work-modal');
const workModal = document.querySelectorAll('.work-modal');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const testimonialButtons = document.querySelectorAll('.testimonial-buttons button');
const testimonialButtonsMobile = document.querySelectorAll('.testimonial-buttons-mobile button');
const testimonialSlideItems = document.querySelectorAll('.testimonial-slide-item');
const touchForm = document.querySelector('.touch-form');

// Array of welcome images
const welcomeImages = [];
let imageIndex = 0;
welcomeImages[0] = 'url("./images/home-bg.jpg") center/cover no-repeat border-box';
welcomeImages[1] = 'url("./images/home-bg-2.jpg") center/cover no-repeat border-box';

// To change welcome image
function changeWelcomeImage() {
  imageIndex = (imageIndex === (welcomeImages.length - 1)) ? 0 : imageIndex += 1;
  welcomeImage.style.background = welcomeImages[imageIndex];
}

// To open/close mobile nav bar
burguerButton.addEventListener('click', () => {
  if (mobileNav.classList.contains('mobile-nav-open')) {
    mobileNav.classList.remove('mobile-nav-open');
  } else {
    mobileNav.classList.add('mobile-nav-open');
  }
});

// To display member bar
function handleMemberBar() {
  for (let i = 0; i < memberBox.length; i += 1) {
    memberBox[i].addEventListener('mouseenter', () => {
      memberBar[i].classList.add('member-bar-open');
    });
    memberBox[i].addEventListener('mouseleave', () => {
      memberBar[i].classList.remove('member-bar-open');
    });
  }
}

// To display work modal
function handleWorkModal() {
  for (let i = 0; i < workBox.length; i += 1) {
    workBox[i].addEventListener('mouseenter', () => {
      workModal[i].classList.add('work-modal-open');
    });
    workBox[i].addEventListener('mouseleave', () => {
      workModal[i].classList.remove('work-modal-open');
    });
  }
}

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

// To hide all active buttons in the nav bar
function hideAllNavActive() {
  mainNavItems.forEach((button) => {
    button.classList.remove('nav-item-active');
  });
}

const options = {
  root: null,
  threshold: 0.50,
  rootMargin: '0px',
};

// To observe all sections in the screen
const observer = new IntersectionObserver(((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    switch (entry.target.id) {
      case 'welcome':
        hideAllNavActive();
        mainNavItems[0].classList.add('nav-item-active');
        break;
      case 'what-we-do':
        hideAllNavActive();
        mainNavItems[1].classList.add('nav-item-active');
        break;
      case 'genius-studio':
        hideAllNavActive();
        mainNavItems[2].classList.add('nav-item-active');
        break;
      case 'team-member':
        hideAllNavActive();
        mainNavItems[3].classList.add('nav-item-active');
        break;
      case 'latest-work':
        hideAllNavActive();
        mainNavItems[4].classList.add('nav-item-active');
        break;
      case 'our-blog':
        hideAllNavActive();
        mainNavItems[5].classList.add('nav-item-active');
        break;
      case 'touch':
        hideAllNavActive();
        mainNavItems[6].classList.add('nav-item-active');
        break;
      default:
        break;
    }
  });
}), options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Call change welcome image
setInterval(changeWelcomeImage, 4000);

// Call display member bar
handleMemberBar();

// Call display work modal
handleWorkModal();

// Call display answer
displayAnswer();

// Call display slide mobile
displayTestimonialSlideMobile();

// Call display slide (Tablet and Desktop)
displayTestimonialSlide();
