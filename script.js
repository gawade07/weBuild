let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar');
let serachForm = document.querySelector(' #search-btn');
let searchBar = document.querySelector('.search-form');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form')
let contactForm = document.querySelector('#info-btn');
let contactBar = document.querySelector('.contact-info');
let closeBtn = document.querySelector('#close-contact-info');


menuBtn.onclick= () =>{
    
    navBar.classList.toggle('active');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');

    
   
 
}

serachForm.onclick=()=>{
 
    searchBar.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    
   
}
loginBtn.onclick=()=>{
   
    loginForm.classList.toggle('active');
    navBar.classList.remove('active')
    searchBar.classList.remove('active');
}


contactForm.onclick=()=>{
    contactBar.classList.add('active');
    navBar.classList.remove('active')
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    
}
closeBtn.onclick=()=>{
    contactBar.classList.remove('active');
   
    
}


window.onscroll =()=>{
   
    navBar.classList.remove('active');

   
    searchBar.classList.remove('active');

   
    loginForm.classList.remove('active');
 
    contactBar.classList.remove('active');
   
}