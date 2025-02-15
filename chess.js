const board = document.querySelector("#chessboard");
const playerTurn = document.querySelector("#player");
const info = document.querySelector("#info");

const width = 8;

const startPosition = [
    r, kn, b, q, k, b, kn, r,
    p, p, p, p, p, p, p, p,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    p, p, p, p, p, p, p, p,
    r, kn, b, q, k, b, kn, r,
];

function createBoard() {
    startPosition.forEach((startPos, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = startPos;
        square.firstChild?.setAttribute('draggable', true);
        square.setAttribute('square-id', i);
        const row = Math.floor((63 - i) / 8) + 1;
        if (row % 2 == 0) {
            square.classList.add(i % 2 == 0 ? "w" : "b");
        } else square.classList.add(i % 2 == 0 ? "b" : "w");

        if (i <= 15) {
            square.firstChild.firstChild.classList.add('blackPiece');
        }

        if (i >= 48) {
            square.firstChild.firstChild.classList.add('whitePiece');
        }


        board.append(square);
    })
}

createBoard();

const allSquares = document.querySelectorAll("#chessboard .square");

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
})

let pieceStartPos;
let pieceDragged;

function dragStart(e){
    pieceStartPos = e.target.parentNode.getAttribute('square-id')
    pieceDragged = e.target

    console.log(pieceDragged, pieceStartPos)
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    e.stopPropagation()
    //e.target.append(pieceDragged)
    e.target.parentNode.append(pieceDragged)
    e.target.remove()
    
}