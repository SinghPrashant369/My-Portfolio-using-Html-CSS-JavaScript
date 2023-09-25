function toggleMenu(){
    const menu=document.querySelector(".menu-links"); 
    const icon=document.querySelector(".hamburger-icon"); 
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");
}


/*Changing the font-color of the page heading like About, Education, Contact, Skills */
function changeColor1(){
    document.getElementById("education-title").style.color="#f5f5f5"; 
}
function changeColor2(){
    document.getElementById("about-title").style.color="#f5f5f5";
}
function changeColor3(){
    document.getElementById("contact-title").style.color="#f5f5f5";
}

function changeColor4(){
    document.getElementById("skills-title").style.color="#f5f5f5";
}