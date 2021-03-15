let hamb = document.querySelector('.hamb');
let menu = document.querySelector('.menu');
let writing = document.querySelector('.writing');

hamb.addEventListener('click', ()=>{
    
    if(menu.style.opacity == 1) {
        writing.style.marginTop = '-180px'
        menu.style.opacity = '0';        
    }
    else{
        writing.style.marginTop = '0px'
        menu.style.opacity = '1';
    }
});