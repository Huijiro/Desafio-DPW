const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mes = parseInt(form.mes.value);

    switch (mes) {
        case 1:
            imprimirMes('Janeiro');
            break;
        case 2:
            imprimirMes('Fevereiro');
            break;
        case 3:
            imprimirMes('Março');
            break;
        case 4:
            imprimirMes('Abril');
            break;
        case 5:
            imprimirMes('Maio');
            break;
        case 6:
            imprimirMes('Junho');
            break;
        case 7:
            imprimirMes('Julho');
            break;
        case 8:
            imprimirMes('Agosto');
            break;
        case 9:
            imprimirMes('Setembro');
            break;
        case 10:
            imprimirMes('Outubro');
            break;
        case 11:
            imprimirMes('Novembro');
            break;
        case 12:
            imprimirMes('Dezembro');
            break;
        default:
            imprimirMes('Mês inválido');
            break;
    }
});

function imprimirMes(mes) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = mes;

    resultado.appendChild(p);
}