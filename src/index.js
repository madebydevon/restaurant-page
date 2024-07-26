import { displayHomepage } from "./modules/homepage.js";
import { displayMenu } from "./modules/menu.js";
import { displayAbout } from "./modules/about.js";
import { displayReservationPage } from "./modules/reservations.js";
import { clearPage } from "./modules/utility.js";
import ('./style.css');

// displayHomepage(); // always display the homepage if there is nothing else on the page
displayAbout();


const homePageButton = document.querySelector('button.home-btn');
const menuTabButton = document.querySelector('button.menu-btn');
const aboutTabButton = document.querySelector('button.about-btn');
const reservationTabButton = document.querySelector('button.reservation-btn');

homePageButton.addEventListener('click', () => {
    clearPage();
    displayHomepage();
})

menuTabButton.addEventListener('click', () => {
    clearPage();
    displayMenu();
});

aboutTabButton.addEventListener('click', () => {
    clearPage();
    displayAbout();
});

reservationTabButton.addEventListener('click', () => {
    clearPage();
    displayReservationPage();
})