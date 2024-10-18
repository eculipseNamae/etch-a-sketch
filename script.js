let container = document.querySelector("#container");
let btn = document.querySelector("button");
const containerWidth = parseFloat(container.offsetWidth);
console.log(containerWidth);

let size = 16;
let cellSize = 38;

function generateGrid(){
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            let div = document.createElement("div");
            div.style.cssText = "box-sizing: border-box;"+
                                "border: 1px solid rgb(71, 223, 165);";
            div.style.width = `${cellSize}px`;
            
            div.style.height = div.style.width;
            
            container.appendChild(div);
        }
    }
}

container.addEventListener('mouseover', (e) => {
    let target = e.target;

    if (target && target !== container) {
        let randomColor = getRandomColor();
        let opacityStorage = parseFloat(target.style.opacity) || 0.1;
        let newOpacity = opacityStorage+0.1;
        
        target.style.backgroundColor = randomColor;
        target.style.opacity = `${newOpacity}`;
    }
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', (e)=>{

    const input = parseFloat(prompt("Enter"));
    size = input;
    cellSize = containerWidth/size;
    if (cellSize > 64 || !Number.isFinite(cellSize) || cellSize <= 0) {
        console.log("defaulted to 64");
        cellSize = 64;
    }
    
    container.innerHTML = '';
    generateGrid();
});

generateGrid();