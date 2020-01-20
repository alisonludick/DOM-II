// Example of how to add an EventListener:
// element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

// 1. click event listener to change header background color to red
let redHeader = document.querySelector('.nav-container');
redHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})

// 2. resize window to change background color of Intro
let changeIntro = document.querySelector('.intro');
window.addEventListener('resize', (event) => {
    changeIntro.style.backgroundColor = 'orange';
})

// 3. dblclick event to change background color of text
let textContent = document.querySelector('.text-content');
textContent.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'silver';
})

// 4. and 5. mouseover and mouseout to change image
let imgDestination = document.querySelector('.dest-place');
imgDestination.addEventListener('mouseover', () => {
    imgDestination.src = 'img/destination2.jpg';
})

imgDestination.addEventListener('mouseout', () => {
    imgDestination.src = 'img/destination1.jpg';
})

// 6. give image green dotted outline when dragged 
let imgAdventure = document.querySelector('.img-fluid');
imgAdventure.addEventListener('drag', event => {
    event.target.style.outline = '5px dotted green';
})

// 7. alert message when button is right-clicked , using contextmenu
let funSunButton = document.getElementById('fun-sun');
funSunButton.addEventListener('contextmenu', (event) => {
    alert('Not Available In The Rainy Season!')
})

// 8. mousedown event changes button text, and button text color (works similarly to click)
let mtnExcButton = document.getElementById('mtn-exc');
mtnExcButton.addEventListener('mousedown', (event) => {
    event.target.innerText = "Make Sure You Are Fit!";
    event.target.style.color = 'red';
})

// 9. add extra text to heading when the mouse enters over the text
let gettawayHeading = document.getElementById('honeymoon');
gettawayHeading.addEventListener('mouseenter', event => {
    event.target.innerText += " ~ For NewlyWeds!";
})

// 10. translate heading to Afrikaans when the mouse leaves the heading text
let welcomeHeading = document.getElementById('welcome');
welcomeHeading.addEventListener('mouseleave', event => {
    event.target.textContent = 'Welkom By Die Pret Bus!';
})

// prevent normal button function with stopPropagation 

let contentSection = document.querySelector(".content-section");
contentSection.addEventListener("click", (event) => {
  event.target.style.backgroundColor="papayawhip";
  console.log("end")
})

let textLetsGo = document.querySelector(".text-content");
textLetsGo.addEventListener('click', (event) => {
  textLetsGo.style.backgroundColor="rebeccapurple";
  event.stopPropagation(); // adding this will prevent the contentSection changing to papayawhip
  console.log("beginning")
});

// prevent normal button function with preventDefault

let stopLinks = document.querySelectorAll('.nav-link')
stopLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() // prevents default action from being navigated away from the website 
    event.stopPropagation()
    event.target.style.color = 'blue'
  })
})


