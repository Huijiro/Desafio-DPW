const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = parseInt(form.valor.value);

    let div10 = valor % 10 == 0;
    let div5 = valor % 5 == 0;
    let div2 = valor % 2 == 0;

    mostrarDivisibilidade(div10, div5, div2);
});

function mostrarDivisibilidade(div10, div5, div2) {
    const divisibilidade = document.querySelector('#divisibilidade');

    divisibilidade.innerHTML = '';

    const div10p = document.createElement('p');
    div10p.textContent = `Divisível por 10: ${div10 ? 'Sim' : 'Não'}`;

    const div5p = document.createElement('p');
    div5p.textContent = `Divisível por 5: ${div5 ? 'Sim' : 'Não'}`;

    const div2p = document.createElement('p');
    div2p.textContent = `Divisível por 2: ${div2 ? 'Sim' : 'Não'}`;

    divisibilidade.appendChild(div10p);
    divisibilidade.appendChild(div5p);
    divisibilidade.appendChild(div2p);
}