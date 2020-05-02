let table = [];
for (var row = 0; row < 8; row++) {
    table[row] = [];
    for (var col = 0; col < 8; col++) {
        table[row][col] = "-";
    }
}

function EightQueens(table, row, currentlyMarked) {

    if (row === 8) {
        console.log(table);
        return 0;
    }
    else {
        for (let col = 0; col < 8; col++) {
            if (CanPlaceQueen(table, row, col)) {
                currentlyMarked = [];
                MarkAttackedPossitions(table, row, col, currentlyMarked);
                EightQueens(table, row + 1, currentlyMarked);
                UnMarkAttackedPossitions(table, row, col, currentlyMarked);
            }
        }
    }

}



function CanPlaceQueen(table, row, col) {
    let allow = false;
    if (table[row][col] != "*") {
        allow = checkRow(table, row, col);
    }
    return allow;
}

function MarkAttackedPossitions(table, row, col, currentlyMarked) {
    markAttackedRows(table, row, col, currentlyMarked);
    markAttackedCols(table, row, col, currentlyMarked);
    markAttackedDiagonalsRight(table, row, col, currentlyMarked);
    markAttackedDiagonalsLeft(table, row, col, currentlyMarked);
}

function UnMarkAttackedPossitions(table, row, col, currentlyMarked) {
    table[row][col] = '-';
   for (let index = 0; index < currentlyMarked.length; index++) {
       table[currentlyMarked[index].row][currentlyMarked[index].col] = '-';
   }
}


function markAttackedDiagonalsLeft(table, row, col, currentlyMarked) {
    let diogonalCol = col - 1;
    for (var i = row + 1; i < 8; i++) {
        let stop = 0;
        for (var j = diogonalCol; stop < 1; j++) {
            if (diogonalCol < 0) {
                return;
            }
            else if (table[i][j] === 'x') {
                stop++;
                diogonalCol--;
                continue
            }else{
                currentlyMarked.push({
                    row: i,
                    col: j
                })
                table[i][j] = "x";
                stop++;
                diogonalCol--;
            }
        }
    }
}

function markAttackedDiagonalsRight(table, row, col, currentlyMarked) {
    let diogonalCol = col + 1;
    for (var i = row + 1; i < 8; i++) {
        let stop = 0;
        for (var j = diogonalCol; stop < 1; j++) {
            if (diogonalCol >= 8) {
                return;
            }
            else if (table[i][j] === 'x') {
                stop++;
                diogonalCol++;
                continue;
            } else {
                currentlyMarked.push({
                    row: i,
                    col: j
                })
                table[i][j] = "x";
                stop++;
                diogonalCol++;
            }
        }
    }
}


function markAttackedCols(table, row, col, currentlyMarked) {
    for (var j = row + 1; j < 8; j++) {
        if (table[j][col] === "x") {
            continue
        } else {
            currentlyMarked.push({
                row: j,
                col: col
            })
            table[j][col] = "x";
        }
    }
}

function markAttackedRows(table, row, col, currentlyMarked) {
    for (var j = col + 1; j < 8; j++) {
        if (table[row][j] === 'x') {
            continue;
        } else {
            currentlyMarked.push({
                row: row,
                col: j
            })
            table[row][j] = "x";
        }
    }
}

function checkRow(table, row, col) {
    if (table[row][col] != "x") {
        table[row][col] = "*";
        return true;
    }
}

function checkCol(table, row, col) {
    for (var j = row; j < 8; j++) {
        if (table[j][col] != "x") {
            return true;
        }
    }
}

function checkDiagonal(table, row, col) {
    for (var i = row + 1; i < 8; i++) {
        for (var j = col + 1; j < 8; j++) {
            if (table[i][j] != "x") {
                return true;
            }
        }
    }
}

EightQueens(table, 0, []);