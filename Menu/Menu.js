
// class actionMenu {
//   constructor(menu){
//     this.menu = menu;
//     this.menuButtons = this.menu.querySelector('.menu-button')

//   }
// }


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  const menu = document.querySelector('.menu')
  // menu.classList.toggle('menu-open');
  // element.classList.toggle('menu-open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', event => {
  event.toggleMenu();
})

