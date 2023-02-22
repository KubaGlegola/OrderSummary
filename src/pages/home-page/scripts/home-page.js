/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss';

const buttonHandler = document.querySelector('.card__button');

buttonHandler.addEventListener('click', ()=>{
    buttonHandler.innerHTML="<div class='loader'><div></div><div></div><div></div><div></div></div>";
    setTimeout((        
    )=>{
        buttonHandler.innerHTML="Proceed to Payment";        
    }, 2000);
    
})