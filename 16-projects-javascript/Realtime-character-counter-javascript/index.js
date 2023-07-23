const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingTotalCounter = document.getElementById("remaining-counter")


textareaEl.addEventListener("keyup", ()=>{
    
    updateCounter();    

});

updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;

    remainingTotalCounter.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}