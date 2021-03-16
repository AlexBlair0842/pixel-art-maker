
var color = "";
var sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    var heightElement = document.getElementById("inputHeight");
    var widthElement = document.getElementById("inputWidth");
    var height = heightElement.value;
    var width = widthElement.value;
    makeGrid(width, height);
})
function makeGrid(w, h) {
// create pixel block
  var table = document.querySelector("#pixelCanvas");
  for (var i = 0; i <= h; i++) {
      table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
      var line = document.querySelector("#table" + i);
      for (var j = 1; j <= w; j++) {
          line.insertAdjacentHTML("afterbegin","<td id = cell" + i + j +"></td>");
          // Resets Table

              var x = 0;
              var t = "table" + x;
              var row = document.getElementById(t);
              while (row !== null) {
                  row.remove();
                  x = ++x;
                  t = "table" + x;
                  row = document.getElementById(t);
                }
              }
            }

// color cell

    document.getElementById("pixelCanvas").addEventListener("click", function () {
        var colorElement = document.getElementById("colorPicker");
        var color = colorElement.value;
        var click = event.target.id;
        var elem = document.getElementById(click);
        elem.style.backgroundColor = color;
    })
}
