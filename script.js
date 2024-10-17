let container = document.querySelector("#container");
let btn = document.querySelector("button");
const containerWidth = parseFloat(container.offsetWidth);
console.log(containerWidth);


for(i=0; i<16; i++){
    for(j=0; j<16; j++){
        let div = document.createElement("div");
        div.style.width = (containerWidth/16)+"px";
        div.style.height = (containerWidth/16)+"px";
        container.appendChild(div);
    }
}

container.addEventListener('mouseover', (e) => {
    let target = e.target;

    if (target && target !== container) {
        // Generate a new random RGB color on each hover
        let randomColor = getRandomColor();
        
        // Set the new random color
        target.style.backgroundColor = randomColor;

        // Darken the color by 10% for subsequent hovers
        darkenColor(target, 0.1);
    }
});

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken the existing color of the target by a specified percentage
function darkenColor(target, percent) {
    let currentColor = target.style.backgroundColor;

    // If the color is not set, return
    if (!currentColor) return;

    let rgba = currentColor.match(/\d+/g).map(Number); // Extract RGB values
    let factor = 1 - percent; // Calculate the darkening factor

    // Darken each color component
    let r = Math.floor(rgba[0] * factor);
    let g = Math.floor(rgba[1] * factor);
    let b = Math.floor(rgba[2] * factor);

    // Set the new darker color
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


btn.addEventListener('click', (e)=>{

    let input = parseFloat(prompt("Enter"));
    let newSize = setSize(input);
    if (newSize > 64 || !Number.isFinite(newSize) || newSize <= 0) {
        console.log("defaulted to 64");
        newSize = 64;
    }
    

    container.innerHTML = '';
    for(i=0; i<input; i++){
        for(j=0; j<input; j++){
            let div = document.createElement("div");
            div.style.width = `${newSize}px`;
            
            div.style.height = div.style.width;
            container.appendChild(div);
        }
    }
});

function setSize(num){
    return containerWidth/num;
}