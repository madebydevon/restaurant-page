import imageSource from '/src/assets/restaurant-view.jpg'

export function displayContactPage() {

    const container = document.querySelector('div#content');
    const content = document.createElement('div');
    content.classList.add('content-container');

    const title = document.createElement('h2');
    title.textContent = "Contact";


    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    const backgroundImage = new Image();
    backgroundImage.classList.add('background-image');
    backgroundImage.src = imageSource;

    
    const contactInfoWrapper = document.createElement('div');
    contactInfoWrapper.classList.add('contact-info-container')
    const contactInfoTitle = document.createElement('h3');
    contactInfoTitle.textContent = "Contact info";
    const contactInfo = document.createElement('div');
    const email = document.createElement('a');
    email.setAttribute('href', 'mailto:"bites@example.com"');
    const phoneNumber = document.createElement('a');
    phoneNumber.setAttribute('href', 'tel:');
    const address = document.createElement('p');
    email.textContent = "bites@example.com";
    phoneNumber.textContent = "+1 (037) 676-1077";
    address.textContent = "4972 Bites Street, New York";


    container.appendChild(backgroundImage);
    container.appendChild(content);
    content.appendChild(contactInfoWrapper);
    contactInfoWrapper.appendChild(contactInfoTitle);
    contactInfoWrapper.appendChild(contactInfo);
    contactInfo.appendChild(email);
    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(address);

    const times = [
        {
            day: 'Monday',
            hours: 'Closed'
        },
        {
            day: 'Tuesday',
            hours: '3:30 - 11:30 PM'
        },
        {
            day: 'Wednesday',
            hours: '1:30 - 10:30 PM'
        },
        {
            day: 'Thursday',
            hours: '3:30 - 11:30 PM'
        },
        {
            day: 'Friday',
            hours: '1:00 - 9 PM'
        },
        {
            day: 'Saturday',
            hours: '2:30 PM - 12:00 AM'
        },
        {
            day: 'Sunday',
            hours: '2:30 - 7:30 PM'
        }
    ]

    const timesContainer = document.createElement('div');
    const timesHeader = document.createElement('h3');


    content.appendChild(timesContainer);
    timesContainer.appendChild(timesHeader);
    timesHeader.textContent = "Hours";

    times.forEach((day, index) => {
        const hours = document.createElement('p');
        hours.textContent = `${day.day}: ${day.hours}`;
        timesContainer.appendChild(hours);
    });

    const reservationContainer = document.createElement('div');
    reservationContainer.classList.add('reservation-container');
    const reservationTitle = document.createElement('h3');
    reservationTitle.textContent = "Reservations";
    const reservationText = document.createElement('p');
    reservationText.textContent = "Please make your reservation at least 5 days in advance by calling us at +1 (037) 676-1077.";

    content.appendChild(reservationContainer);
    reservationContainer.appendChild(reservationTitle);
    reservationContainer.appendChild(reservationText);

};