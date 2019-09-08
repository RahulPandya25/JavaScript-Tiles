var clickThis;
var rows = 3;
var columns = 3;

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

fillGrid(rows, columns, 1, "lightblue");
