import { displayHomepage } from "./modules/homepage.js";
import { displayMenu } from "./modules/menu.js";
import { displayAbout } from "./modules/about.js";
import { displayContactPage } from "./modules/contact.js";
import { clearPage } from "./modules/utility.js";
import ('./style.css');

displayHomepage();


const homePageButton = document.querySelector('button.home-btn');
const menuTabButton = document.querySelector('button.menu-btn');
const aboutTabButton = document.querySelector('button.about-btn');
const contactTabButton = document.querySelector('button.contact-btn');

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

contactTabButton.addEventListener('click', () => {
    clearPage();
    displayContactPage();
})