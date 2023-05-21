const form = document.querySelector('form');

form.juros.addEventListener('input', validateInput);
form.valorInicial.addEventListener('input', validateInput);
form.depositoMensal.addEventListener('input', validateInput);
form.meses.addEventListener('input', validateInput);

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const juros = parseFloat(form.juros.value);
  const valorInicial = parseFloat(form.valorInicial.value);
  const depositoMensal = parseFloat(form.depositoMensal.value);
  const meses = parseInt(form.meses.value);

  const payload = {
    juros,
    valorInicial,
    depositoMensal,
    meses
  };

  const dados = await sendPayload(payload);

  mostrarTabela(dados);
});

/**
 * Verifica se o valor do input é válido, se não for, o valor é setado para 0.
 * 
 * @param {InputEvent} event 
 */
function validateInput(event) {
  const input = event.target;
  const value = input.value;

  if (value === '' || value < 0) {
    input.value = 0;
  }
}

/**
 * Envia os dados para o servidor.
 * 
 * @param {{
 *  juros: number,
 *  valorInicial: number,
 *  depositoMensal: number,
 *  meses: number
 * }} payload
 */

async function sendPayload(payload) {
  try {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });


    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    alert(error.message);
  }
}

/**
 * Mostra a tabela com os dados.
 * 
 * @param {{
 * mes: number,
 * deposito: number,
 * juros: number,
 * total: number
 * }[]} dados
 */
function mostrarTabela(dados) {
  const div = document.querySelector('#display');

  div.innerHTML = '';

  const table = document.createElement('table');

  const thead = document.createElement('thead');

  const tr = document.createElement('tr');

  const thMes = document.createElement('th');
  thMes.textContent = 'Mês';

  const thDeposito = document.createElement('th');
  thDeposito.textContent = 'Depósito';

  const thJuros = document.createElement('th');
  thJuros.textContent = 'Juros';

  const thTotal = document.createElement('th');
  thTotal.textContent = 'Total';

  tr.appendChild(thMes);
  tr.appendChild(thDeposito);
  tr.appendChild(thJuros);
  tr.appendChild(thTotal);

  thead.appendChild(tr);

  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  table.appendChild(tbody);

  for (let i = 0; i < dados.length; i++) {
    const tr = document.createElement('tr');

    const tdMes = document.createElement('td');
    tdMes.textContent = dados[i].mes;

    const tdDeposito = document.createElement('td');
    tdDeposito.textContent = dados[i].deposito;

    const tdJuros = document.createElement('td');
    tdJuros.textContent = dados[i].juros;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = dados[i].total;

    tr.appendChild(tdMes);
    tr.appendChild(tdDeposito);
    tr.appendChild(tdJuros);
    tr.appendChild(tdTotal);

    tbody.appendChild(tr);
  }

  div.appendChild(table);
}