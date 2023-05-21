const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const n1 = parseInt(form.n1.value);
    const n2 = parseInt(form.n2.value);

    if (n1 + n2 > 20) {
        showNumber(n1 + n2 + 8);
    } else if (n1 + n2 <= 20) {
        showNumber(n1 + n2 - 5);
    }
});

function showNumber(result) {
    const resultHTML = document.querySelector('#result');

    resultHTML.innerHTML = '';

    const resultP = document.createElement('p');
    resultP.textContent = `Resultado: ${result}`;

    resultHTML.appendChild(resultP);
}