var gridState = {
    grid: ''
};
var alertReload = function () {
    alert('Enter number less than 100');
    window.location.reload();
};
var createBttn = document.getElementById('createBttn');
var input = document.getElementById('inputID');
input === null || input === void 0 ? void 0 : input.addEventListener('change', function (ev) {
    ev.target.value <= 100 ? (gridState.grid = ev.target.value) : alertReload();
    layoutGrid(Number(gridState.grid));
});
var clearBttn = document.getElementById('clearBttn');
clearBttn === null || clearBttn === void 0 ? void 0 : clearBttn.addEventListener('click', function () {
    window.location.reload();
});
function layoutGrid(_grid) {
    var sqCont = document.getElementById('sqContainer');
    sqCont === null || sqCont === void 0 ? void 0 : sqCont.style.setProperty('--grid-rows', _grid.toString());
    sqCont === null || sqCont === void 0 ? void 0 : sqCont.style.setProperty('--grid-cols', _grid.toString());
    for (var c = 0; c < _grid * _grid; c++) {
        var cell = document.createElement('div');
        sqCont === null || sqCont === void 0 ? void 0 : sqCont.appendChild(cell).className = 'grid';
    }
}
