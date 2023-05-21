const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const input = form.texto.value.split(';');

    const result = input.reduce((acc, cur) => {
        return acc + (parseInt(cur) > 100 && parseInt(cur) < 200 ? 1 : 0);
    }, 0);

    mostrarResultado(result);
});

function mostrarResultado(result) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = result;
}