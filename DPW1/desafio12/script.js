const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = parseInt(form.number.value);

    imprimirTabuada(number);
});

function imprimirTabuada(number) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement('tr');

        const td = document.createElement('td');
        td.textContent = `${number} x ${i} = ${number * i}`;

        tr.appendChild(td);

        table.appendChild(tr);
    }

    resultado.appendChild(table);
}