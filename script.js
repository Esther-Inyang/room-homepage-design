

const nav = document.querySelector(".nav")
const menuLinks = document.querySelectorAll(".menu-link")

menuLinks.forEach((menuLink) =>{
    menuLink.addEventListener("click",()=>{
        nav.querySelector(".active").classList.remove("active")
        menuLink.classList.add("active")
    })
})


const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

const hero = document.querySelector(".hero")
const articleTitle = document.querySelector(".shop-now-article h2")
const articleText = document.querySelector(".shop-now-article p")

counter = 0;
//Array for Sliders
const heroSliders = [
    {
        heroBg: url("./images/desktop-image-hero-1.jpg"), 
        articleTitle: "Discover innovative ways to decorate",
        articleText: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },

    {
        heroBg: url("./images/desktop-image-hero-2.jpg"), 
        articleTitle: "We are available all across the globe",
        articleText: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },

    {
        heroBg: url("./images/desktop-image-hero-3.jpg"), 
        articleTitle: "Manufactured with the best materials",
        articleText: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    }
]

nextBtn.addEventListener("click",()=>{
    
})