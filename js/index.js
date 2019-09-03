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






// change main navigation to block display??
let mainNav = document.querySelector('.container .nav-container .nav .nav-links');

mainNav.addEventListener('mouseover', () => {
    mainNav.style.display = 'block';
})