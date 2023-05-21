const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let xPos = parseInt(form.xPos.value) - 1;
    let yPos = parseInt(form.yPos.value) - 1;

    if (xPos < 0 || xPos > 7) {
        alert('Posição X inválida');
        if (yPos < 0 || yPos > 7) {
            alert('Posição Y inválida');
            return;
        }
        return;
    }

    const moves = validMoves(xPos, yPos);

    showBoard(xPos, yPos, moves);
    showMoveTable(moves);
});

/**
 * Função que mostra o tabuleiro, a posição do cavalo e os movimentos válidos
 * @param {*} xPos Posição X do cavalo
 * @param {*} yPos Posição Y do cavalo
 * @param {*} moves Lista de movimentos válidos
 */
function showBoard(xPos, yPos, moves) {
    const table = document.querySelector('#board');

    table.innerHTML = '';

    const header = document.createElement('tr');
    const th0 = document.createElement('th');
    header.appendChild(th0);

    for (let i = 0; i < 8; i++) {
        const th = document.createElement('th');
        th.innerText = i + 1;
        header.appendChild(th);
    }

    table.appendChild(header);

    for (let i = 0; i < 8; i++) {
        const tr = document.createElement('tr');

        const header = document.createElement('th');
        header.innerText = i + 1;
        tr.appendChild(header);

        for (let j = 0; j < 8; j++) {
            const td = document.createElement('td');

            if (i == xPos && j == yPos) {
                td.innerText = '♞';
                td.classList.add('knight');
            }

            for (let k = 0; k < moves.length; k++) {
                if (moves[k] === null) {
                    continue;
                }
                if (moves[k][0] == i && moves[k][1] == j) {
                    td.innerText = k + 1;
                    td.classList.add('valid');
                }
            }


            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

/**
 * Função que mostra a tabela de movimentos válidos
 * 
 * @param {*} moves Lista de movimentos válidos
 */
function showMoveTable(moves) {
    const table = document.querySelector('#moves');

    table.innerHTML = '';

    const header = document.createElement('tr');
    const th0 = document.createElement('th');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');

    th0.innerText = '#';
    th1.innerText = 'X';
    th2.innerText = 'Y';

    header.appendChild(th0);
    header.appendChild(th1);
    header.appendChild(th2);
    table.appendChild(header);

    for (let i = 0; i < moves.length; i++) {
        const tr = document.createElement('tr');

        const index = document.createElement('td');
        index.innerText = i + 1;
        index.style.fontWeight = 'bold';

        tr.appendChild(index);

        if (moves[i] === null) {
            const td = document.createElement('td');

            td.innerText = 'inválido';
            td.colSpan = 2;
            td.style.backgroundColor = 'red';

            tr.appendChild(td);
            table.appendChild(tr);
            continue;
        }
        for (let j = 0; j < moves[i].length; j++) {
            const td = document.createElement('td');
            td.innerText = moves[i][j];

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

/**
 * Função que retorna uma lista de movimentos válidos
 * 
 * @param {*} xPos Posição X do cavalo
 * @param {*} yPos Posição Y do cavalo
 * 
 * @returns Lista de movimentos válidos aonde cada movimento é uma lista com a posição X e Y, ou null caso o movimento seja inválido.
 */
function validMoves(xPos, yPos) {
    const deltas = [
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1]
    ];

    const validMoves = deltas.map((delta) => {
        return [xPos + delta[0], yPos + delta[1]];
    }).map((move) => {
        if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
            return null;

        } else {
            return move;
        }
    });
    return validMoves;
}