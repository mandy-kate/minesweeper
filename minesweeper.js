document.addEventListener('DOMContentLoaded', startGame)


function startGame ()  {
    //addListeners(document.getElementsByClassName('board')[0].children)
    var children = document.getElementsByClassName('board')[0].children
    console.log(children)
    addListeners(children)
    }

function addListeners (element) {
    for (var i = 0; i < element.length; i++) {
        //console.log(elements[i])
    element[i].addEventListener('click', showCell);
    }
}

function showCell (evt) {
    //console.log(evt.target)
    evt.target.classList.remove('hidden')
}

startGame()
