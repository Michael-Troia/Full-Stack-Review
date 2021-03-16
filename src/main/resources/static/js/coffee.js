"use strict"

function createRoast(){
    let roastType = document.getElementById('roastType').value;
    let roastName = document.getElementById('newRoast').value;

    let newCoffee = {
        id: coffees.length + 1,
        name: roastName,
        roast: roastType
    }

    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

function searchCoffee() {
    let searchTerm = document.getElementById('search').value;
    let filteredCoffees = [];
    coffees.forEach(coffee => {
        const searchTermLowercase = searchTerm.toString().toLowerCase();
        if (coffee.name.toLowerCase().includes(searchTermLowercase) || coffee.name.includes(searchTerm)) {
            filteredCoffees.push(coffee);
        }
    })
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + '<h3>'+ coffee.name + '</h3>' + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    let sortedCoffees = coffees.sort((a, b) => (a.name > b.name) ? -1 : 1) //sort coffee area alphabetically by name
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(sortedCoffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let newRoastButton = document.querySelector('#newRoast-btn');
tbody.innerHTML = renderCoffees(coffees);
newRoastButton.addEventListener('click', createRoast);
submitButton.addEventListener('click', updateCoffees);
