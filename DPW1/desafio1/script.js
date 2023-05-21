let exercicioA = [];

for (let i = 0; i < 6; i++) {
    exercicioA[i] = [];

    for (let j = 0; j < 6; j++) {
        exercicioA[i][j] = i > j ? i + 1 : j + 1;
    }
}

const tableA = makeTable(exercicioA, 'A');

document.querySelector('#exercicio1').appendChild(tableA);

let exercicioB = [];

for (let i = 0; i < 6; i++) {
    exercicioB[i] = [];

    for (let j = 0; j < 6; j++) {
        exercicioB[i][j] = i - 23 + j * 6;
    }
}

const tableB = makeTable(exercicioB, 'B');

document.querySelector('#exercicio2').appendChild(tableB);

let exercicioC = [];

for (let i = 0; i < 6; i++) {
    exercicioC[i] = [];

    for (let j = 0; j < 6; j++) {
        if (i == j) {
            exercicioC[i][j] = i % 2 !== 0 ? '@' : '=';
        } else {
            if (i < j) {
                exercicioC[i][j] = j - i;
            }
            else {
                exercicioC[i][j] = -(i + j + 2);
            }
        }
    }
}

const tableC = makeTable(exercicioC, 'C');

document.querySelector('#exercicio3').appendChild(tableC);


/**
 * Função para criar uma tabela a partir de um array bidimensional.
 * 
 * @param {Array<Array<any>>} array Array bidimensional.
 * @param {string} letter Elemento inserido como primeiro elemento do header.
 * @returns {HTMLElement} Tabela criada como elemento HTML.
 */

function makeTable(array, letter) {
    console.table(array);

    let table = document.createElement('table');

    let headerRow = document.createElement('tr');

    let headerHeader = document.createElement('th');
    let headerHeaderText = document.createTextNode(`(${letter})`);

    headerHeader.appendChild(headerHeaderText);
    headerRow.appendChild(headerHeader);

    for (let i = 0; i < array[0].length; i++) {

        let header = document.createElement('th');
        let headerText = document.createTextNode(i + 1);

        header.appendChild(headerText);
        headerRow.appendChild(header);
    }

    table.appendChild(headerRow);

    for (let i = 0; i < array.length; i++) {
        let row = document.createElement('tr');

        let rowHeader = document.createElement('th');
        let rowHeaderText = document.createTextNode(i + 1);

        rowHeader.appendChild(rowHeaderText);
        row.appendChild(rowHeader);

        for (let j = 0; j < array[i].length; j++) {
            let cell = document.createElement('td');
            let cellText = document.createTextNode(array[i][j]);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
}