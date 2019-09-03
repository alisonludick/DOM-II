// Example of how to add an EventListener:
// element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

// click event listener to change header background color to red
let redHeader = document.querySelector('.nav-container');
redHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})

// mouseover event to change background color
let changeIntro = document.querySelector('.intro');
changeIntro.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'orange';
})