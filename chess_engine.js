<script src="js/chessboard-1.0.0.js"></script>

var board = null
var newGame = new Chess();

function onStart(source, position, piece, status){
    if(newGame.game_over()){
        return false
    }
    if(piece.search(/^b/) !== -1){
        return false
    }
}

function randomMoves(){
    var possibleMovements = newGame.moves()
    if(possibleMovements.length() == 0){
        return
    }
    var randomIndex = Math.floor(Math.random() * possibleMovements.length)
    newGame.move(possibleMovements[randomIndex])
    board.position(newGame.fen())
}

function moveFromSource(source, destination){
    newGame.move({
        to:
    })
}