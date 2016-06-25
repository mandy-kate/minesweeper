document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells : [

  ]
};

function startGame () {
  var boardChildren = document.getElementsByClassName('board')[0].children;

  for (var i = 0; i < boardChildren.length; i++) {
    addListeners(boardChildren[i]);
    addCellToBoard(boardChildren[i]);
  }

   for (var j = 0; j < board.cells.length; j++) {
    board.cells[j].surroundingMines = countSurroundingMines(board.cells[j]);
  }

  function addListeners(elem) {
  elem.addEventListener('click', showCell);
  elem.addEventListener('contextmenu', markCell);
  }

  function getRow(ele) {
  var classNames = ele.classList;
  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i].indexOf("row-") > -1) {
      return (parseInt(classNames[i].split("row-").join("")));
      }
    }
  }

function getCol(ele) {
  var classNames = ele.classList;
  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i].indexOf("col-") > -1) {
      return (parseInt(classNames[i].split("col-").join("")));
      }
    }
  }

  function addCellToBoard (ele) {
    var newCell = {};
    newCell.row = getRow(ele);
    newCell.col = getCol(ele);
    newCell.isMine = ele.classList.contains("mine");

    board.cells.push(newCell);

  }


function countSurroundingMines(cell) {

  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  var count = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    }
  }
  return count;
}

  function showCell (evt) {
    event.target.classList.toggle('hidden');
  }

  function markCell (evt) {
    event.preventDefault();
    event.target.classList.toggle('marked');
    event.target.classList.toggle('hidden');

     for (var i = 0; i < board.cells.length; i++) {
    if ( (board.cells[i].row === getRow(event.target)) &&
    (board.cells[i].col === getCol(event.target)) ) {
      board.cells[i].isMarked = true;
    }
  }
}
}