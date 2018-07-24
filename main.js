var selectDown = document.querySelector('.down-arrow');
var selectUp = document.querySelector('.up-arrow');
var infoText = document.querySelector('.info-selector-text');


selectDown.addEventListener('click', function() {    
    infoText.innerHTML = "Phone number";   
})

selectUp.addEventListener('click', function() {
    infoText.innerHTML = "Email addresses";
})







