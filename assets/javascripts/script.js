let lastScrollTop = 0 ;
const header = document.querySelector("header");

window.addEventListener("scroll",function (){
    let currentScroll = window.pageXOffset || document.documentElement.scrollTop;

    if(currentScroll > lastScrollTop){
        header.style.top = '-100px';
    }
    else{
        header.style.top = '0';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0: currentScroll 
})
//carousel
const conteiner =  document.getElementById("cards1")

document.getElementById("btn-left").addEventListener("click", function(){
    conteiner.scrollBy({ left: -580, behavior:"smooth"})
    console.log(conteiner);
})


document.getElementById("btn-rigth").addEventListener("click", function(){
    conteiner.scrollBy({ rigth: 580, behavior:"smooth"})
})

setInterval(() =>{
    const maxScrollleft = conteiner.scrollWidth -conteiner.clientWidth;
    if(conteiner.maxScrollLeft >= maxScrollleft){
        conteiner.scrollTo({left: 580, behavior:"smooth"});
    
    }
    else{
        conteiner.scrollBy({left: 580,behavior: "smooth"});

    }

},3000)

const menuBtn = document.getElementById("menu-toggle")
const nav = document.querySelector("nav")

menuBtn.addEventListener("click", function(){
    nav.classList.toggle("active");
})