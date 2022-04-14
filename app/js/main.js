//MENU
const navbarWork = () => {
   const menuBtn = document.querySelector('.hamburger-menu');
   const sidebar = document.querySelector('.sidebar');
   sidebar.inert = true;

   menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('change');
      menuBtn.classList.toggle('change');
      sidebar.inert = !sidebar.inert;
   });
}

navbarWork();

//Scroll Button
const scrollBtn = document.querySelector('.scroll-btn');
const html = document.querySelector('html')

scrollBtn.addEventListener('click', () => {
   html.style.scrollBehavior = 'smooth';
   setTimeout(() => {
      html.style.scrollBehavior = 'unset ';
   }, 1000)
});

//Spinner 
const body = document.querySelector('body');
window.onload = () => {
   setTimeout(() => {
      body.classList.add('display');
   }, 4000)
}