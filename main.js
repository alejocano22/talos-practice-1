const welcomeImage = document.getElementById('welcome');
const burguerButton = document.querySelector('.burguer-button');
const mobileNav = document.querySelector('.mobile-nav');
const memberBar = document.querySelectorAll('.member-bar');
const memberBox = document.querySelectorAll('.member-box');

const welcomeImages = [];
let imageIndex = 0;
welcomeImages[0] = 'url("./images/home-bg.jpg") center/cover no-repeat border-box';
welcomeImages[1] = 'url("./images/home-bg-2.jpg") center/cover no-repeat border-box';

function changeWelcomeImage() {
  imageIndex = (imageIndex === (welcomeImages.length - 1)) ? 0 : imageIndex += 1;
  welcomeImage.style.background = welcomeImages[imageIndex];
}

// Change welcome image
setInterval(changeWelcomeImage, 4000);

// mobile nav (Open - Close)
burguerButton.addEventListener('click', () => {
  if (mobileNav.classList.contains('mobile-nav-open')) {
    mobileNav.classList.remove('mobile-nav-open');
  } else {
    mobileNav.classList.add('mobile-nav-open');
  }
});

function handleMemberBar() {
  for (let i = 0; i < memberBox.length; i += 1) {
    memberBox[i].addEventListener('mouseenter', () => {
      memberBar[i].classList.add('member-bar-open');
      console.log('in');
    });
    memberBox[i].addEventListener('mouseleave', () => {
      memberBar[i].classList.remove('member-bar-open');
      console.log('out');
    });
  }
}

handleMemberBar();
