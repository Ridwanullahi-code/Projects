const menuBtn = document.querySelector('.menu-button');
const menuItems = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	console.log(menuItems)
  menuItems.classList.toggle('show-menu');
});

// remove menu items when any of the links is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuBtn.classList.remove('open');
    menuItems.classList.remove('show-menu');
  });
});

const main = document.querySelector('main');
// backdrop function to close menu items
main.addEventListener('click', () => {
	menuBtn.classList.remove('open');
  menuItems.classList.remove('show-menu');
});


// remove menu items when it's on desktop view
window.onresize = () => { 
	var width = window.innerWidth;
	if (width > 768) { 
		menuBtn.classList.remove('open');
		menuItems.classList.remove('show-menu');
	}
}