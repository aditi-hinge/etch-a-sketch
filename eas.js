let row;
let box;
let gridContainer = document.getElementById("eas-grid");
let colorPicker = document.getElementById("color");
let rainbowCircle = document.getElementById("rainbow-circle");


//grid for 16
let createGrid = (variable) => {
    for(let i=0; i<variable;i++) {
        row = document.createElement("div");
        row.className = "row";
         for (let j=0; j<variable;j++) {
            box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
            
    }gridContainer.appendChild(row);
}};
createGrid(32);

//color for colorPicker value-all


colorPicker.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = colorPicker.value;
    });
})
});
// let rainbowColors = ["#431677", "#003d62","#00FFFF","#00A36C","#FFEA00","#FF7518","#DC143C"];
// let randomRainbowColor = rainbowColors[Math.floor(Math.random()*rainbowColors.length)];
// console.log(randomRainbowColor);

rainbowCircle.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = rainbowColorsFunction;
    });
});
});




//color for rainbow-mode
let rainbowColors = ["violet", "indigo","blue","green","yellow","orange","red"];
let rainbowColorsFunction = () => {
   let randomRainbowColor = rainbowColors[Math.floor(Math.random()*rainbowColors.length)];
    if (randomRainbowColor === "violet") {
       box.style.backgroundColor = "#431677";
   } else if (randomRainbowColor === "indigo") {
    box.style.backgroundColor = "#003d62";
   } else if (randomRainbowColor === "blue") {
    box.style.backgroundColor = "#00FFFF";
   } else if (randomRainbowColor === "green") {
    box.style.backgroundColor = "#00A36C";
   } else if (randomRainbowColor === "yellow") {
    box.style.backgroundColor = "#FFEA00";
   } else if (randomRainbowColor === "orange") {
    box.style.backgroundColor = "#FF7518";
   } else if (randomRainbowColor === "red") {
    box.style.backgroundColor = "#DC143C";
   } else {
       return "error";
   }
   console.log(randomRainbowColor) ;
}
console.log(rainbowColorsFunction());
