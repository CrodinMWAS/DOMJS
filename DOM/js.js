function changeBoard() {
    let container = document.getElementById("container");
    container.innerHTML = "";

    let iterations = parseInt(document.getElementById("tileNumber").value);
    let tileSize = parseInt(document.getElementById("tileSize").value);

    for (let rowIndex = 0; rowIndex < iterations; rowIndex++) {
        let row = document.createElement("div");
        row.className = "row"; 

        for (let columnIndex = 0; columnIndex < iterations; columnIndex++) {
            let tile = document.createElement("div");
            tile.style.width = tileSize + "px";
            tile.style.height = tileSize + "px";

          
            if ((rowIndex + columnIndex) % 2 === 0) {
                tile.style.backgroundColor = "black";
            } else {
                tile.style.backgroundColor = "white";
            }

            row.appendChild(tile);
        }

        container.appendChild(row);
    }
}

changeBoard();
