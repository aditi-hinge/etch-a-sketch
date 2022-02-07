let gridContainer = document.getElementById("eas-grid");
let colorPicker = document.getElementById("color");
let rainbowCircle = document.getElementById("rainbow-circle");
let warmColorCircle = document.getElementById("warm-color-circle");
let coolColorCircle = document.getElementById("cool-color-circle");
let range = document.getElementById("myRange");
let divSizeText= document.getElementById("div-size-text");
let erase= document.getElementById("erase");
let reset = document.getElementById("reset");
let toggleGridLines = document.getElementById("toggle-grid-lines");
let box;
let gridSize= range.value;

//range - change event listener
range.addEventListener("change", (event) =>{
    gridContainer.innerHTML ="";
    createGrid(gridSize);
    });

//range - input event listener
range.addEventListener("input", (event)=>{
    gridSize = event.target.value;
    divSizeText.textContent = "";
    divSizeText.textContent = `GRID SIZE: ${gridSize} X ${gridSize}`;
    });

let createGrid = (gridSize) => {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    const boxSize = 450/gridSize;
    for(let i=0; i<gridSize*gridSize;i++) {
            box = document.createElement("div");
            box.className = "box";
            box.style.height = `${boxSize}px`;
            box.style.width = `${boxSize}px`;
            box.style.borderRadius="10px";
            gridContainer.appendChild(box);
        }
    gridContainer.style.height= "450px";
    gridContainer.style.width= "450px";
    gridContainer.style.gap="1px";
    };
createGrid(gridSize);



//erase button
erase.addEventListener("click",()=>{
    document.querySelectorAll(".box").forEach((box) =>{
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor="white";
        })
    })
});

//reset grid done
reset.addEventListener("click",()=>{
    gridContainer.innerHTML="";
    createGrid(gridSize);
    });
    
//color for colorPicker value-all
colorPicker.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = colorPicker.value;
        });
    })
});

//random rainbow color
rainbowCircle.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = rainbowColorsFunction();
            });
        });
    });


//random warm colors
warmColorCircle.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = warmColorsFunction();
            });
        });
    });

//random warm colors functions

let warmColors = ["BrightGold", "MacaroniandCheese","CanaryYellow","DeerBrown","Cinnamon",
                    "Copper","darkOrange","SchoolBusYellow","Mahogany", "PapayaOrange"];

let warmColorPallete = {
    'BrightGold' : "#FDD017",
    'MacaroniandCheese' : "#F2BB66",
    'CanaryYellow' : "#FFEF00",
    'DeerBrown' : "#E6BF83",
    'Cinnamon' : "#C58917",
    'Copper' : "#B87333",    
    'SchoolBusYellow' : "#E8A317",
    'darkOrange' : "#FF8C00",
    'Mahogany' : "#C04000",
    'PapayaOrange' : "#E56717",
    }                    

let warmColorsFunction = () => {
    let randomWarmColor = warmColors[Math.floor(Math.random()*warmColors.length)];
    return warmColorPallete[randomWarmColor];
    };

//random cool colors function

let coolColors = ["RichLilac", "BrightLilac","PastelPurple","BlossomPink","CottonCandy",
                    "Mauve", "pinkPlum", ];

let coolColorPallete = {
    'RichLilac' : "#B666D2",    
    'BrightLilac' : "#D891EF",
    'PastelPurple' : "#F2A2E8",
    'BlossomPink' : "#F9B7FF",
    'CottonCandy' : "#FCDFFF",
    'Mauve' : "#E0B0FF",
    'pinkPlum' : "#B93B8F",
    }

//random cool colors
coolColorCircle.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = coolColorsFunction();
            });
        });
    });

let coolColorsFunction = () => {
    let randomCoolColor = coolColors[Math.floor(Math.random()*coolColors.length)];
    return coolColorPallete[randomCoolColor];
    };

//function to generate random rainbow color
let rainbowColors = ["BlueHosta", "OceanBlue","blue", "yellow","orange","mint", 
                    "DeepSeaGreen", "Jade","HazelGreen","VenomGreen","Olive","PineGreen",
                    "DarkGreen","DarkForestGreen", "AlienGreen","AcidGreen","HummingbirdGreen",
                    "PastelRed", "ValentineRed", "RubyRed", "TomatoSauceRed","Burgundy",
                    "DonutPink","CarnationPink","Beer","BurlyWood", "Bronze","YellowGreenGrosbeak",
                    "Taupe", "WesternCharcoal", "PurpleLily", "PlumVelvet","CobaltBlue",
                    "BlueOrchid","DodgerBlue","DeepSkyBlue",  "BrightCyan","DarkTurquoise",
                    "DarkMagenta","CamelBrown","Brass","tomato", "Rust", "Salmon"];

let rainbowColorPalette = {
    'BlueHosta' : "#77BFC7",
    'OceanBlue' : "#2B65EC",
    'blue' : "#00FFFF",
    'yellow' : "#FFEA00",
    'orange' : "#FF7518",
    'mint' : "#3EB489",
    'DeepSeaGreen' : "#306754",
    'Jade' : "#00A36C",
    'HazelGreen' : "#617C58",
    'VenomGreen' : "#728C00",
    'Olive' : "#808000",
    'PineGreen' : "#387C44",
    'DarkGreen' : "#006400",
    'DarkForestGreen' : "#254117",
    'AlienGreen' : "#6CC417",
    'AcidGreen' : "#B0BF1A",
    'HummingbirdGreen' : "#7FE817",
    'PastelRed' : "#F67280",
    'ValentineRed' : "#E55451",
    'RubyRed' : "#F62217",
    'TomatoSauceRed' : "#B21807",
    'Burgundy' : "#8C001A",
    'DonutPink' : "#FAAFBE",
    'CarnationPink' : "#F778A1",
    'Beer' : "#FBB117",
    'BurlyWood' : "#DEB887",
    'Bronze' : "#CD7F32",
    'YellowGreenGrosbeak' : "#E2F516",
    'Taupe' : "#483C32",
    'WesternCharcoal' : "#49413F",
    'PurpleLily' : "#550A35",
    'PlumVelvet' : "#7D0552",
    'CobaltBlue' : "#0020C2",
    'BlueOrchid' : "#1F45FC",
    'DodgerBlue' : "#1E90FF",
    'DeepSkyBlue' : "#00BFFF",
    'BrightCyan' : "#0AFFFF",
    'DarkTurquoise' : "#00CED1",
    'DarkMagenta' : "#8B008B",
    'CamelBrown' : "#C19A6B",
    'Brass' : "#B5A642",    
    'tomato' : "#FF6347",
    'Rust' : "#C36241",
    'Salmon' : "#FA8072",
    };

let rainbowColorsFunction = () => {
   let randomRainbowColor = rainbowColors[Math.floor(Math.random()*rainbowColors.length)];
    return rainbowColorPalette[randomRainbowColor];
    };
