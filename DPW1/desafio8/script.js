const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const n1 = parseInt(form.n1.value);
    const n2 = parseInt(form.n2.value);
    const n3 = parseInt(form.n3.value);

    if (n1 < n2) {
        if (n1 < n3) {
            if (n2 < n3) {
                imprimirOrdem(n1, n2, n3);
            } else {
                imprimirOrdem(n1, n3, n2);
            }
        } else {
            imprimirOrdem(n3, n1, n2);
        }
    } else {
        if (n2 < n3) {
            if (n1 < n3) {
                imprimirOrdem(n2, n1, n3);
            } else {
                imprimirOrdem(n2, n3, n1);
            }
        } else {
            imprimirOrdem(n3, n2, n1);
        }
    }
});

function imprimirOrdem(n1, n2, n3) {
    const ordem = document.querySelector('#ordem');

    ordem.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = `Ordem crescente: ${n1}, ${n2}, ${n3}`;

    ordem.appendChild(p);
}
