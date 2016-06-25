document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells : [

  ]
};

function startGame () {
  var boardChildren = document.getElementsByClassName('board')[0].children;

  for (var i = 0; i < boardChildren.length; i++) {
    addListeners(boardChildren[i]);
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

  function showCell (evt) {
    event.target.classList.toggle('hidden');
  }

  function markCell (evt) {
    event.preventDefault();
    event.target.classList.toggle('marked');
  }
}