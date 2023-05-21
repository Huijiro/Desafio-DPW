const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lado1 = parseInt(form.lado1.value);
    const lado2 = parseInt(form.lado2.value);
    const lado3 = parseInt(form.lado3.value);


    if (lado1 == lado2 && lado2 == lado3) {
        imprimirMensagem('Equilátero');
        return;
    }

    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        imprimirMensagem('Isósceles');
        return;
    }

    imprimirMensagem('Escaleno');
});

function imprimirMensagem(mensagem) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = mensagem;

    resultado.appendChild(p);
}