const fillGrid = (x, y, blockSize, numOfBlocks, color) => {
  const container = document.querySelector(".main");
  const test = Array(numOfBlocks).keys();
  for (var i of test) {
    let markup = `<div id="card ${i}" 
                                   style="grid-column: ${Math.floor(
                                     Math.random() * y
                                   ) + 1} / span ${blockSize}; 
                                          grid-row: ${Math.floor(
                                            Math.random() * x
                                          ) + 1} / span ${blockSize};
                                          background-color: ${color};
                                          border: 1px black solid;">${i}</div>`;
    container.innerHTML += markup;
  }
};

fillGrid(4, 5, 2, 20, "lightgreen");
