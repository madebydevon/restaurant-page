import mainImageSource from '../assets/top-view-restaurant.jpg';
import chefPictureSource from '../assets/chef-in-uniform.jpg';

export function displayAbout() {
    const container = document.querySelector('div#content');
    container.classList.add('about-content');
    // big header title saying ABOUT
    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('about-container');

    const pageTitle = document.createElement('h2');
    pageTitle.classList.add('page-title')
    pageTitle.textContent = "About us";

    // smaller background image
    const backgroundImage = new Image();
    backgroundImage.src = mainImageSource;
    backgroundImage.classList.add('about-image');

    const aboutMainContent = document.createElement('p');
    aboutMainContent.textContent = "At Bites Grill & Bar, we prioritize freshness and quality in every dish we serve. Our chefs use only the finest ingredients, sourced locally whenever possible, to ensure that every bite you take is bursting with flavor and juiciness. Whether you’re here for a casual lunch, a family dinner, or a special occasion, our warm and inviting atmosphere is the perfect backdrop for an unforgettable dining experience.";
    
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');
    const chefPicture = new Image();
    chefPicture.src = chefPictureSource;

    const quoteContent = document.createElement('div');
    quoteContent.classList.add('quote-content')

    const quote = document.createElement('p');
    quote.textContent = `"Our mission is to transform fresh, quality ingredients into a dining experience that's as unforgettable as it is delicious. Each bite should tell a story of juiciness, crafted with love and precision."`

    const quoteCredit = document.createElement('div');
    quoteCredit.classList.add('quote-author-info');

    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = "James Bennett"
    const authorTitle = document.createElement('p');
    authorTitle.textContent = "- Head Chef at Bites"

    container.appendChild(mainContentContainer);
    mainContentContainer.appendChild(backgroundImage);
    mainContentContainer.appendChild(pageTitle);
    mainContentContainer.appendChild(aboutMainContent);
    container.appendChild(quoteContainer);
    quoteContainer.appendChild(imageWrapper);
    quoteContainer.appendChild(quoteContent);
    imageWrapper.appendChild(chefPicture);
    quoteContent.appendChild(quote);
    quoteContent.appendChild(quoteCredit);
    quoteCredit.appendChild(quoteAuthor);
    quoteCredit.appendChild(authorTitle);
};