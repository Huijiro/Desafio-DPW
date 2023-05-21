// Retorna um vetor com 10 números aleatórios entre 0 e 100.
const vetor = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));

// Mostra o vetor.

const table = document.querySelector('table');
const tr = document.createElement('tr');

for (let i = 0; i < vetor.length; i++) {
    const td = document.createElement('td');
    td.innerText = vetor[i];
    tr.appendChild(td);
}
table.appendChild(tr);

// Calcula o maior número do vetor.

const max = vetor.sort((a, b) => b - a)[0];

// Calcula o menor número do vetor.

const min = vetor.sort((a, b) => a - b)[0];

// Calcula a média dos números do vetor.

const med = vetor.reduce((a, b) => a + b) / vetor.length;

// Calcula a mediana dos números do vetor.

const mid = vetor.sort((a, b) => a - b)[Math.floor(vetor.length / 2)];


// Mostra os resultados.

const results = document.querySelector('#results');

const maxHTML = document.createElement('p');

maxHTML.innerText = `Maior: ${max}`;
results.appendChild(maxHTML);

const minHTML = document.createElement('p');

minHTML.innerText = `Menor: ${min}`;
results.appendChild(minHTML);

const medHTML = document.createElement('p');

medHTML.innerText = `Média: ${med}`;
results.appendChild(medHTML);

const midHTML = document.createElement('p');

midHTML.innerText = `Mediana: ${mid}`;
results.appendChild(midHTML);

