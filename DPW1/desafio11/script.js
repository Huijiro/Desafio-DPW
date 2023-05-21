const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = parseInt(form.number.value);

    const numberList = [];

    for (let i = 1; i <= Math.pow(number, 2); i++) {
        numberList.push(i);
    }

    imprimirNumeros(numberList);
});

function imprimirNumeros(numberList) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = numberList.join(', ');

    resultado.appendChild(p);
}