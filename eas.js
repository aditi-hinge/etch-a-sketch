window.addEventListener("load", () => {
    let row;
    let box;
    for(let i=0; i<16;i++) {
        row = document.createElement("div");
        row.className = "row";
         for (let j=0; j<16;j++) {
            box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
    }document.getElementById("eas-grid").appendChild(row);
}
});
