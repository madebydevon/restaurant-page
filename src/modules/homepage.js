import mainImage from "../assets/seared-scallops-dish.jpg";

export function displayHomepage() {
    const footer = document.querySelector('footer');
    const container = document.querySelector('div#content');
    container.classList.add('homepage-content') 

    const img = new Image();
    img.src = mainImage;
    img.classList.add('homepage-image');
    const mainKicker = document.createElement('p');
    const mainHeader = document.createElement('h2');
    const mainDescription = document.createElement('p');
    const mainButton = document.createElement('button');
    
    mainKicker.classList.add('homepage-kicker');
    mainHeader.classList.add('homepage-header');
    mainDescription.classList.add('homepage-text')
    mainButton.classList.add('hero-button');
    
    mainKicker.textContent = "Discover your taste";
    mainHeader.textContent = "Dive into a World of Flavor";
    mainDescription.textContent = "At Bites Grill & Bar, we believe every meal should be a tantalizing journey for your taste buds. From the moment you step through our doors, the aroma of our sizzling, succulent dishes will captivate your senses and invite you to indulge.";
    mainButton.textContent = "Grab a bite";
    footer.textContent = "© 2024 Bites. | Image by nuraghies on Freepik";

    container.appendChild(img);
    container.appendChild(mainKicker);
    container.appendChild(mainHeader);
    container.appendChild(mainDescription);
    container.appendChild(mainButton);
}
