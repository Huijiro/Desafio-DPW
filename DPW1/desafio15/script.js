const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const array = form.texto.value.split(';');

    const numberOfCopies = array.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 1;
        }
        else {
            acc[cur]++;
        }
        return acc;
    }, {});

    const result = Object.values(numberOfCopies).reduce((acc, cur) => {
        return acc + (cur > 1 ? 1 : 0);
    }, 0);

    mostrarResultado(numberOfCopies, result);
});


function mostrarResultado(numberOfCopies, result) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = `Número de cópias: ${result}`;

    resultado.appendChild(p);

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');

    th1.innerHTML = 'ID';
    th2.innerHTML = 'Número de cópias';

    tr.appendChild(th1);
    tr.appendChild(th2);

    thead.appendChild(tr);

    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    for (let key in numberOfCopies) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        td1.innerHTML = key;
        td2.innerHTML = numberOfCopies[key];

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    resultado.appendChild(table);
}