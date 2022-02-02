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

//if else loop for rainbow and warm colors (worked but better and shorter version made)

//random rainbow color
rainbowCircle.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = rainbowColorsFunction();
             });
});
});

// //function to generate random rainbow color
let rainbowColors = ["violet", "indigo","blue","green","yellow","orange","mint",
                     "pastelPurple", "pinkPlum","darkOrange","SchoolBusYellow","tomato"];
let rainbowColorsFunction = () => {
   let randomRainbowColor = rainbowColors[Math.floor(Math.random()*rainbowColors.length)];
    if (randomRainbowColor === "violet") {
        return "#77BFC7";
   } else if (randomRainbowColor === "indigo") {
    return "#2B65EC";
   } else if (randomRainbowColor === "blue") {
    return "#00FFFF";
   } else if (randomRainbowColor === "green") {
    return "#00A36C";
   } else if (randomRainbowColor === "yellow") {
    return "#FFEA00";
   } else if (randomRainbowColor === "orange") {
    return "#FF7518";
   } else if (randomRainbowColor === "mint") {
    return "#3EB489";
   } else if (randomRainbowColor === "pastelPurple") {
    return "#F2A2E8";
   } else if (randomRainbowColor === "pinkPlum") {
    return "#B93B8F";
   } else if (randomRainbowColor === "SchoolBusYellow") {
    return "#E8A317";
   } else if (randomRainbowColor === "darkOrange") {
    return "#FF8C00";
   } else if (randomRainbowColor === "tomato") {
    return "#FF6347";
   }else {
       return "error";
   }
   }

//random warm colors
warmColorCircle.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = warmColorsFunction();
            console.log(warmColorsFunction());
             });
});
});

//random warm colors functions
let warmColors = ["BrightGold", "MacaroniandCheese","CanaryYellow","DeerBrown","CamelBrown","Brass","Cinnamon",
                     "Copper", "pinkPlum","darkOrange","SchoolBusYellow","tomato","Mahogany",
                    "Rust", "PapayaOrange","Salmon","PastelRed", "ValentineRed", "RubyRed",
                    "TomatoSauceRed","Burgundy","DonutPink","CarnationPink","Beer","BurlyWood",
                    "Bronze"];
let warmColorsFunction = () => {
   let randomWarmColor = warmColors[Math.floor(Math.random()*warmColors.length)];
    if (randomWarmColor === "BrightGold") {
        return "#FDD017";
   } else if (randomWarmColor === "MacaroniandCheese") {
    return "#F2BB66";
   } else if (randomWarmColor === "CanaryYellow") {
    return "#FFEF00";
   } else if (randomWarmColor === "DeerBrown") {
    return "#E6BF83";
   } else if (randomWarmColor === "CamelBrown") {
    return "#C19A6B";
   } else if (randomWarmColor === "Brass") {
    return "#B5A642";
   } else if (randomWarmColor === "Cinnamon") {
    return "#C58917";
   } else if (randomWarmColor === "Copper") {
    return "#B87333";
   } else if (randomWarmColor === "pinkPlum") {
    return "#B93B8F";
   } else if (randomWarmColor === "SchoolBusYellow") {
    return "#E8A317";
   } else if (randomWarmColor === "darkOrange") {
    return "#FF8C00";
   } else if (randomWarmColor === "tomato") {
    return "#FF6347";
   } else if (randomWarmColor === "Mahogany") {
    return "#C04000";
   } else if (randomWarmColor === "Rust") {
    return "#C36241";
   } else if (randomWarmColor === "PapayaOrange") {
    return "#E56717";
   } else if (randomWarmColor === "Salmon") {
    return "#FA8072";
   } else if (randomWarmColor === "PastelRed") {
    return "#F67280";
   } else if (randomWarmColor === "ValentineRed") {
    return "#E55451";
   } else if (randomWarmColor === "RubyRed") {
    return "#F62217";
   } else if (randomWarmColor === "TomatoSauceRed") {
    return "#B21807";
   } else if (randomWarmColor === "Burgundy") {
    return "#8C001A";
   } else if (randomWarmColor === "DonutPink") {
    return "#FAAFBE";
   } else if (randomWarmColor === "CarnationPink") {
    return "#F778A1";
   } else if (randomWarmColor === "Beer") {
    return "#FBB117";
   } else if (randomWarmColor === "BurlyWood") {
    return "#DEB887";
   } else if (randomWarmColor === "Bronze") {
    return "#CD7F32";
   } else {
       return "error";
   }
   }
