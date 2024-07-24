

export function displayMenu() {
    const container = document.querySelector('div#content');
    container.classList.add('menu-content');
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = "Our menu"
    container.appendChild(menuTitle);

    let foodItems = [
        {
            name: 'Sizzling Steak Fajitas',
            price: '26,50'
        },    
        {
            name: 'Honey-Glazed BBQ Ribs',
            price: '36,50'
        },
        {
            name: 'Juicy grilled chicken',
            price: '24,00'
        },
        {
            name: 'Succulent Shrimp Skewers',
            price: '14,50'
        },
        {
            name: 'Grilled Portobello Mushrooms',
            price: '21,00'
        }
    ];

    let drinks = [
        {
            name: 'Coca Cola',
            price: '2,50'
        },
        {
            name: 'Fanta',
            price: '2,00'
        },
        {
            name: 'Pina Colada',
            price: '5,00'
        },
        {
            name: 'Water',
            price: '1,00'
        },
        {
            name: 'Mojito',
            price: '9,50'
        }
    ]

    const foodSection = document.createElement('div');
    foodSection.classList.add('food-section');
    container.appendChild(foodSection);
    const foodHeader = document.createElement('h2');
    foodHeader.textContent = "Food";
    foodSection.appendChild(foodHeader);

    foodItems.forEach((item, index) => {
        const foodInformation = document.createElement('div');
        foodInformation.classList.add('food-information');
        foodSection.appendChild(foodInformation);
        const foodName = document.createElement('p');
        foodName.textContent = `${foodItems[index].name}`; 
        const foodPrice = document.createElement('p');
        foodPrice.classList.add('prices');
        foodPrice.textContent = `$${foodItems[index].price}`;

        foodInformation.appendChild(foodName);
        foodInformation.appendChild(foodPrice);
    });

    const drinkSection = document.createElement('div');
    drinkSection.classList.add('drink-section');
    container.appendChild(drinkSection);
    const drinkHeader = document.createElement('h2');
    drinkHeader.textContent = "Drinks";
    drinkSection.appendChild(drinkHeader);

    drinks.forEach((drink, index) => {
        const drinkInformation = document.createElement('div');
        drinkInformation.classList.add('drink-information')
        drinkSection.appendChild(drinkInformation);
        const drinkName = document.createElement('p');
        drinkName.textContent  = `${drinks[index].name}`;
        const drinkPrice = document.createElement('p');
        drinkPrice.classList.add('prices')
        drinkPrice.textContent = `$${drinks[index].price}`;
        
        drinkInformation.appendChild(drinkName);
        drinkInformation.appendChild(drinkPrice);
    });
}