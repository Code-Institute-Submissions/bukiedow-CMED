let menu = document.querySelector('#calvary-menu');
let menuLinks = document.querySelector('.navbar__menu');
let navLogo = document.querySelector('#navbar__logo');

// Displays Mobile Menu
let calvaryMenu = () => {
  menu.classList.toggle('yes-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', calvaryMenu);

// Show active menu when scrolling
let highlightMenu = () => {
  let elem = document.querySelector('.highlight');
  let aboutMenu = document.querySelector('#about-page');
  let searchMenu = document.querySelector('#search-page');
  let helpMenu = document.querySelector('#help-page');
  let scrollPos = window.scrollY;


  // Close mobile Menu when clicking on a menu item
  let hideCalvaryMenu = () => {
    let menuBars = document.querySelector('.yes-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('yes-active');
      menuLinks.classList.remove('active');
    }
  };

  menuLinks.addEventListener('click', hideCalvaryMenu);
  navLogo.addEventListener('click', hideCalvaryMenu);

  // adds 'highlight' class to all  menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    aboutMenu.classList.add('highlight');
    searchMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    searchMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    helpMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add('highlight');
    searchMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


let menu = document.querySelector('#calvary-menu');
let menuLinks = document.querySelector('.navbar__menu');
let navLogo = document.querySelector('#navbar__logo');

// Displays Mobile Menu
let calvaryMenu = () => {
  menu.classList.toggle('yes-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', calvaryMenu);

// Show active menu when scrolling
let highlightMenu = () => {
  let elem = document.querySelector('.highlight');
  let aboutMenu = document.querySelector('#about-page');
  let searchMenu = document.querySelector('#search-page');
  let helpMenu = document.querySelector('#help-page');
  let scrollPos = window.scrollY;


  // Close mobile Menu when clicking on a menu item
  let hideCalvaryMenu = () => {
    let menuBars = document.querySelector('.yes-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('yes-active');
      menuLinks.classList.remove('active');
    }
  };

  menuLinks.addEventListener('click', hideCalvaryMenu);
  navLogo.addEventListener('click', hideCalvaryMenu);

  // adds 'highlight' class to all  menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    aboutMenu.classList.add('highlight');
    searchMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    searchMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    helpMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add('highlight');
    searchMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);