/*Write a function `calcWinState` to take a 
representation of a tictactoe (noughts and crosses) board ( `BoardState`)
 and return the status (`WinStatus`):

either

- there was a draw;
- or the game has not been finished yet;
- or a player won (indicate the winning player)

Assume all input board states are legal (e.g. no board has winning rows by BOTH players).

Assume, for simplicity, that `type Player = "X" | "O"`

### Designing representations

- You will have to design the representation of the board state.  Keep it simple.   
Coordinates representing (x, y) or (column,row) are **not** actually required.

- You will have to design the return type to be able to represent the three states.

Note: In the case of a win, you don’t have to report *where* the winning row is, 
only which player won.
========================
assuming the board is read line-by-line, 1 through 9;

                    1 2 3
                    4 5 6
                    7 8 9

win states (where the other loses) are:
'x' | 'o' at position 1, 2, 3 | 4, 5, 6 | 7, 8, 9 [horizontal]
'x' | 'o at position 1, 4, 7 | 2, 5, 8, | 3, 6, 9 [vertical]
'x' | 'o' at position 1, 5, 9 | 3, 5, 7 [diagonal]
if these conditions ARE met, but board includes empty spaces === someone has won

if none of these conditions are met, but all positions are occupied === DRAW
if none of these conditions are met, but board includes empty spaces === UNFINISHED

consider that an input might have an imbalanced input ratio - may need to include
a test that checks if input follows an [x, o, x, o, x....] style
        - take array input, remove empties, then check for alternation (use .filter)


consider:
[x, x, x, , , , o, o, o] - actually couldnt be an input because x will win before o's are inputted
[ , x, o, x, o, x, o, , ] - three x's emerge first but o wins
=========================
FUNCTION    CALC_WIN_STATE
params: 
an array of strings, BOARD_STATE
a function, IS_DRAW
a function, IS_FINISHED
returns: 
=================
IS_WIN()
    draw/unfinished
            IF  CHECK_FOR_ROW_WIN returns true || 
                CHECK_FOR_DIAG_WIN returns true ||                                  
                CHECK_FOR-COL_WIN returns true
                    return WINNING_PLAYER "is the winner!" (how to set winning player??)

            ELSE    return "The game ended in a draw"

ELSE IF     IS_FINISHED returns false && CHECK_FOR_ROW_WIN returns false &&
                                        CHECK_FOR_DIAG_WIN returns false &&
                                        CHECK_FOR_COL_WIN returns false

                                                return "The game is unfinished"
========================== */
function checkForRowWin(boardState: string[]): string {
    let winner = "false"

    if (boardState[0] && boardState[1] && boardState[2] === ("X" || "O")) {
        winner = boardState[0];
    }
    if (boardState[3] && boardState[4] && boardState[5] === ("X" || "O")) {
        winner = boardState[3];
    }
    if (boardState[6] && boardState[7] && boardState[8] === ("X" || "O")) {
        winner = boardState[6];
    }
    return winner
}
function checkForDiagWin(boardState: string[]): string {
    let winner = "false"

    if (boardState[0] && boardState[4] && boardState[8] === ("X" || "O")) {
        winner = boardState[0];
    }
    if (boardState[2] && boardState[4] && boardState[6] === ("X" || "O")) {
        winner = boardState[3];
    }
    return winner
}
function checkForColWin(boardState: string[]): string {
    let winner = "false"

    if (boardState[0] && boardState[3] && boardState[6] === ("X" || "O")) {
        winner = boardState[0];
    }
    if (boardState[1] && boardState[4] && boardState[7] === ("X" || "O")) {
        winner = boardState[3];
    }
    if (boardState[2] && boardState[5] && boardState[8] === ("X" || "O")) {
        winner = boardState[3];
    }
    return winner
}

function isFinished(boardState: string[]): string {
    if(boardState.includes("")) {
        return "unfinished"
    }
    else return "draw"
}


function calcWinState(boardState: string[]): string {
    let winState = ""
    
    if (checkForRowWin(boardState) !== "false") {
        winState = checkForRowWin(boardState)
    }
    if (checkForDiagWin(boardState) !== "false") {
        winState = checkForDiagWin(boardState)
    }
    if (checkForColWin(boardState) !== "false") {
        winState = checkForColWin(boardState)
    }
    if(winState = "" /*there has been no win*/ ) {
        winState = isFinished(boardState)
    }
    
    return winState
}

console.log(calcWinState(["x", "x", "x", "", "", "O", "O", "", ""]))











