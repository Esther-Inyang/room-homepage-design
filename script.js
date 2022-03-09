
//ACTIVE MENU
const nav = document.querySelector(".nav")
const menuLinks = document.querySelectorAll(".menu-link")

menuLinks.forEach((menuLink) =>{
    menuLink.addEventListener("click",()=>{
        nav.querySelector(".active").classList.remove("active")
        menuLink.classList.add("active")
    })
})

//HAMBURGER FOR MOBILE
const navContainer = document.querySelector(".nav-container")
const hamburgerOpen = document.querySelector(".hamburger-open")
const hamburgerClose = document.querySelector(".hamburger-close")
const heroTitle = document.querySelector(".hero-title")

hamburgerOpen.addEventListener("click", ()=>{
    hamburgerOpen.style.display = "none";
    hamburgerClose.style.display = "block";
    heroTitle.style.display = "none";
    navContainer.classList.add("shownav");
    menuLinks.style.color = "black";
})

hamburgerClose.addEventListener("click", ()=>{
    hamburgerClose.style.display = "none";
    hamburgerOpen.style.display = "block";
    heroTitle.style.display = "block";
    navContainer.classList.remove("shownav");
})

//BUTTONS
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

const hero = document.querySelector(".hero")
const articleTitle = document.querySelector(".shop-now-article h2")
const articleText = document.querySelector(".shop-now-article p")

let counter = 0;
//Array for Sliders
const pageSliders = [
    {
        heroImgDesk: "url(./images/desktop-image-hero-1.jpg)",
        heroImgMob: "url(./images/mobile-image-hero-1.jpg)",  
        articleTitle: "Discover innovative ways to decorate",
        articleText: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },

    {
        heroImgDesk: "url(./images/desktop-image-hero-2.jpg)", 
        heroImgMob: "url(./images/mobile-image-hero-2.jpg)",  
        articleTitle: "We are available all across the globe",
        articleText: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },

    {
        heroImgDesk: "url(./images/desktop-image-hero-3.jpg)",
        heroImgMob: "url(./images/mobile-image-hero-3.jpg)",  
        articleTitle: "Manufactured with the best materials",
        articleText: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    }
]

window.addEventListener("DOMContentLoaded", ()=>{
    pageSlider()
})

function pageSlider(){
    articleTitle.textContent = pageSliders[counter].articleTitle;
    articleText.textContent = pageSliders[counter].articleText;

    let screenWidth = screen.width;
    // console.log(screenWidth)

    if(screenWidth >= 992){
        hero.style.backgroundImage = pageSliders[counter].heroImgDesk;
    } else if(screenWidth >= 768){
        hero.style.backgroundImage = pageSliders[counter].heroImgMob;
    } else{
        hero.style.backgroundImage = pageSliders[counter].heroImgMob;
    }
}

nextBtn.addEventListener("click", ()=>{
    counter++;

    //after last slide do this
    if(counter > pageSliders.length-1){
        counter = 0;
    }

    pageSlider();
})

prevBtn.addEventListener("click", ()=>{
    counter--;

    //before first slide do this
    if(counter < 0){
        counter = pageSliders.length-1;
    }

    pageSlider();
})
