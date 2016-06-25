document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  var boardChildren = document.getElementsByClassName('board')[0].children;

  for (var i = 0; i < boardChildren.length; i++) {
    addListeners(boardChildren[i]);
  }

  function addListeners(elem) {
  elem.addEventListener('click', showCell);
  elem.addEventListener('contextmenu', markCell);
  }

  function showCell (evt) {
    event.target.classList.toggle('hidden');
  }

  function markCell (evt) {
    event.preventDefault();
    event.target.classList.toggle('marked');
  }
}