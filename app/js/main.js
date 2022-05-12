//CARDS
const navBtns = document.querySelectorAll('.card__nav-btn');

function showTour(btns) {
   btns.forEach(btn => {
      btn.addEventListener('click', () => {
         btn.parentElement.parentElement.classList.toggle('change');
      });
   });
};

showTour(navBtns);

//Navbar
const navLinks = document.querySelectorAll('.navbar__list-link');
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const openBtn = document.querySelector('.navbar__btn--open');
const closeBtn = document.querySelector('.navbar__btn--close');
navbar.inert = true;

openBtn.addEventListener('click', () => {
   container.classList.add('change');
   navbar.inert = false;
});
closeBtn.addEventListener('click', () => {
   container.classList.remove('change');
   navbar.inert = true;
});

function setColors(items) {
   const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
   let i = 0;

   items.forEach(item => {
      item.style.cssText = `background-color: ${colors[i++]}`;
   });
};

setColors(navLinks);

//inert