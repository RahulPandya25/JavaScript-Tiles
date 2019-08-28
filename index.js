var clickThis;
var rows = 4;
var columns = 5;

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
                
                onclick=sendRespose(this)>${r}${c}</div>`;
      container.innerHTML += markup;
    }
  }
};

var sendRespose = function(element) {
  console.log(element.classList);
  if (element.classList.contains("00")) console.log("POMPOM");
  clickMe();
};

var clickMe = function() {
  removeClickClass();
  clickThis =
    "" + Math.floor(Math.random() * rows) + Math.floor(Math.random() * columns);
  document.getElementById(clickThis).classList.add("click");
};

var removeClickClass = function() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(element => {
    element.classList.remove("click");
  });
};

fillGrid(rows, columns, 1, "lightgreen");
