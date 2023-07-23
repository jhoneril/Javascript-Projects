const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY);

    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight -20){
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }

});