const containerEl = document.querySelector(".container");

for (let x = 0; x < 30; x++){
    
    const colorContainerEls = document.createElement("div");
    colorContainerEls.classList.add("color-container");

    containerEl.appendChild(colorContainerEls);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        console.log(newColorCode);

        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let x = 0; x < colorCodeLength; x++){

        const randomNum = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNum, randomNum + 1);

    }

    return colorCode;

}