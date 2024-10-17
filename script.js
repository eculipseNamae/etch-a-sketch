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
            div.style.opacity = 0.1;
            container.appendChild(div);
        }
    }
});

function setSize(num){
    return containerWidth/num;
}