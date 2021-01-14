const menu = document.querySelector('#calvary-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const calvaryMenu = () => {
  menu.classList.toggle('yes-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', calvaryMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const aboutMenu = document.querySelector('#about-page');
  const searchMenu = document.querySelector('#search-page');
  const helpMenu = document.querySelector('#help-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 700) {
    aboutMenu.classList.add('highlight');
    searchMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    searchMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    helpMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2300) {
    aboutMenu.classList.add('highlight');
    searchMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 650) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideCalvaryMenu = () => {
  const menuBars = document.querySelector('.yes-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('yes-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideCalvaryMenu);
navLogo.addEventListener('click', hideCalvaryMenu);




/*for maps to span entire page before results are listed*/
