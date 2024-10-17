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
container.addEventListener('mouseover', (e)=>{
    let target = e.target;
    if(target && target!==container){
        target.style.backgroundColor = "#616161";
    }
    
});

btn.addEventListener('click', (e)=>{

    /* let cols = parseInt(prompt("Enter number of cols:"),10);
    let rows = parseInt(prompt("Enter number of rows:"),10);
    if(rows>64 || !Number.isInteger(rows) || rows<=0){
        console.log("rows defaulted to 64");
        rows = 64;
    }
    if(cols>64 || !Number.isInteger(cols) || cols<=0){
        console.log("cols defaulted to 64");
        cols = 64;
    } */
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