const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = parseInt(form.valor.value);

    if (valor < 0 || valor > 100) {
        alert('Valor inválido!');
        return;
    }

    let valorRes = valor;

    const notas10 = Math.floor(valor / 10);

    valorRes = valorRes - (notas10 * 10);

    const notas5 = Math.floor(valorRes / 5);

    valorRes = valorRes - (notas5 * 5);

    const notas1 = Math.floor(valorRes / 1);

    valorRes = valorRes - (notas1 * 1);

    mostrarNotas(notas10, notas5, notas1)
});

function mostrarNotas(notas10, notas5, notas1) {
    const notas = document.querySelector('#dinheiro');

    notas.innerHTML = '';

    const notas10p = document.createElement('p');
    notas10p.textContent = `Notas de 10: ${notas10}`;

    const notas5p = document.createElement('p');
    notas5p.textContent = `Notas de 5: ${notas5}`;

    const notas1p = document.createElement('p');
    notas1p.textContent = `Notas de 1: ${notas1}`;

    notas.appendChild(notas10p);
    notas.appendChild(notas5p);
    notas.appendChild(notas1p);
}