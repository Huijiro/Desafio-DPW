const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const array = form.texto.value.split(';');

    imprimirResultado(array);
});

function imprimirResultado(array) {
    const resultado = document.querySelector('#resultado');

    const arrayParInpar = array.map((cur) => cur % 2 === 0 ? 'par' : 'impar');

    resultado.innerHTML = arrayParInpar.join(';');
}