// Example of how to add an EventListener:
// element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

// click event listener to change header background color to red
let redHeader = document.querySelector('.nav-container');
redHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})

// mouseover event to change background color of Intro
let changeIntro = document.querySelector('.intro');
changeIntro.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'orange';
})

// dblclick event to change background color of text
let textContent = document.querySelector('.text-content');
textContent.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'silver';
})

// mouseover and mouseout to change image
let imgDestination = document.querySelector('.dest-place');
imgDestination.addEventListener('mouseover', () => {
    imgDestination.src = 'img/destination2.jpg';
})

imgDestination.addEventListener('mouseout', () => {
    imgDestination.src = 'img/destination1.jpg';
})

// give image green dotted outline when dragged 
let imgAdventure = document.querySelector('.img-fluid');
imgAdventure.addEventListener('drag', event => {
    event.target.style.outline = '5px dotted green';
})

// alert message when button clicked 
let funSunButton = document.getElementById('fun-sun');
funSunButton.addEventListener('click', (event) => {
    alert('Not Available In The Rainy Season!')
})




// change main navigation to block display??
let mainNav = document.querySelectorAll('.nav-link');

mainNav.addEventListener('mouseover', event => {
    event.target.style.direction = 'rtl';
})