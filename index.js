var clickThis;
var rows = 4;
var columns = 4;

const fillGrid = (x, y, blockSize, color) => {
  const container = document.querySelector("main");
  const rows = Array(x).keys();
  for (var r of rows) {
    const columns = Array(y).keys();
    for (var c of columns) {
      let markup = `<div class="card" id="${r}${c}" 
          style="grid-row: ${r + 1}  / span ${blockSize}; 
                grid-column: ${c + 1} / span ${blockSize};
                // background-color: ${color};
                box-sizing: border-box;                                          
                border: 1px black solid;"
                
                onclick=sendRespose(event)>${r}${c}</div>`;
      container.innerHTML += markup;
    }
  }

  // testing
  clickMe("00");
};

var sendRespose = function(element) {
  console.log(element.target.id);
  if (element.target.id === clickThis) clickMe(clickThis);
};

var clickMe = function(oldCLick) {
  clickThis =
    "" + Math.floor(Math.random() * rows) + Math.floor(Math.random() * columns);
  if (clickThis === oldCLick) clickMe(oldCLick);
  removeClickClass();
  document.getElementById(clickThis).classList.add("click");
};

var removeClickClass = function() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(element => {
    element.classList.remove("click");
  });
};

var updateGridMatrix = function(row, col) {
  // updating css var
  document.documentElement.style.setProperty("--rowNum", row);
  document.documentElement.style.setProperty("--colNum", col);
  // updating js var
  rows = row;
  columns = col;
};

var refillGrid = function() {
  // remove existing grid
  var main = document.querySelector("main");
  var elements = main.getElementsByClassName("card");
  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  fillGrid(rows, columns, 1, "white");
};

var makeResponsive = function(x) {
  if (x.matches) {
    // If media query matches
    // update css/js variables
    updateGridMatrix(3, 3);

    console.log("if");
  } else {
    // update css/js variables
    updateGridMatrix(4, 4);
    console.log("else");
  }
  // remove old grid and fill new one
  refillGrid();
};

var x = window.matchMedia("(max-width: 786px)");
makeResponsive(x); // Call listener function at run time
x.addListener(makeResponsive); // Attach listener function on state changes

fillGrid(rows, columns, 1, "white");
