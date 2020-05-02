let labyrinth =
    [['-','*','*', '-', 'e'],
    ['-','-','-', '-', '-'],
    ['*','*','*', '*', '*']]

function TryPath(labyrinth, row, col, direction, path) {

    if (!isValid(labyrinth, row, col)) {
        return;
    }

    path.push(direction);
    if (IsExit(labyrinth, row, col)) {
        console.log(path);
    } else if (CanMove(labyrinth, row, col)) {
        MarkMoved(labyrinth, row, col)
        TryPath(labyrinth, row - 1, col, "U", path)
        TryPath(labyrinth, row + 1, col, "D", path)
        TryPath(labyrinth, row, col - 1, "L", path)
        TryPath(labyrinth, row, col + 1, "R", path)
        UnMarkMoved(labyrinth, row, col)
    }
    path.pop();
}

function IsExit(labyrinth, row, col) {
    if (labyrinth[row][col] === 'e') {
        return true;
    }
}

function MarkMoved(labyrinth, row, col) {
    labyrinth[row][col] = 'x';
}
function UnMarkMoved(labyrinth, row, col) {
    labyrinth[row][col] = '-';
}

function isValid(labyrinth, row, col) {
    if (row >= 0 && row < 5 && col >= 0 && col < 5) {
        return true;
    }
    return false;
}

function CanMove(labyrinth, row, col){
    if(labyrinth[row][col] === 'x'){
        return false;
    }
    if(labyrinth[row][col] === '*'){
        return false;
    }
    return true;
}

TryPath(labyrinth, 0, 0, 'S', []);
