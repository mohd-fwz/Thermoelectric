const header = document.querySelector("header");
const body = document.querySelector("body");
const aboutBtn = document.querySelector("#about-link");
const aboutH2 = document.querySelector(".about-heading");
const compBtn = document.querySelector("#components-link");
const compH2 = document.querySelector(".comp-heading");
const demoBtn = document.querySelector("#demo-link");
const demoH2 = document.querySelector(".demo-heading");
const teamBtn = document.querySelector("#team-link");
const teamH2 = document.querySelector(".team-heading");
const images = document.querySelectorAll("img");
const lightBox = document.querySelector("#light-box");
const enlargedImage = document.querySelector("#enlarged-img");
const closeBtn = document.querySelector("#close");

aboutBtn.addEventListener('click',()=>{
    aboutH2.classList.remove("animate-about");
    void aboutH2.offsetWidth; 
    aboutH2.classList.add("animate-about");
})

compBtn.addEventListener('click',()=>{
    compH2.classList.remove("animate-comp");
    void compH2.offsetWidth;
    compH2.classList.add("animate-comp");
})

demoBtn.addEventListener('click',()=>{
    demoH2.classList.remove("animate-demo");
    void demoH2.offsetWidth;
    demoH2.classList.add("animate-demo");
})

teamBtn.addEventListener('click',()=>{
    teamH2.classList.remove("animate-team");
    void teamH2.offsetWidth;
    teamH2.classList.add("animate-team");
})

images.forEach((image)=>{
    image.addEventListener('click',()=>{
        enlargedImage.src = image.src;
        lightBox.style.display = 'flex';
        header.style.display = 'none';
        body.style.overflow = 'hidden';
    })
})

closeBtn.addEventListener('click',()=>{
    lightBox.style.display = 'none';
    header.style.display = 'flex';
    body.style.overflow = 'auto';
})

lightBox.addEventListener('click',(e)=>{
    if(e.target != enlargedImage){
        lightBox.style.display = 'none';
        header.style.display = 'flex';
        body.style.overflow = 'auto';
    }
})