const welcomeImage = document.getElementById('welcome');
const burguerButton = document.querySelector('.burguer-button');
const mobileNav = document.querySelector('.mobile-nav');
const memberBar = document.querySelectorAll('.member-bar');
const memberBox = document.querySelectorAll('.member-box');
const workBox = document.querySelectorAll('.work-modal');
const workModal = document.querySelectorAll('.work-modal');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

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

// Call change welcome image
setInterval(changeWelcomeImage, 4000);

// Call display member bar
handleMemberBar();

// Call display work modal
handleWorkModal();

// Call display answer
displayAnswer();
