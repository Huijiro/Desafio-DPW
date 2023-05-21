import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors(
  {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  }
));

app.use(express.json());

function validateEmpty(req, res, next) {
  if (!req.body.juros) {
    return res.status(400).send(new Error('Juros não informado'));
  }

  if (!req.body.valorInicial) {
    return res.status(400).send(new Error('Valor inicial não informado'));
  }

  if (!req.body.depositoMensal) {
    return res.status(400).send(new Error('Depósito mensal não informado'));
  }

  if (!req.body.meses) {
    return res.status(400).send(new Error('Meses não informado'));
  }

  next();
}

function validateNotZero(req, res, next) {
  if (req.body.juros === 0) {
    return res.status(400).send(new Error('Juros não pode ser 0'));
  }

  if (req.body.valorInicial === 0) {
    return res.status(400).send(new Error('Valor inicial não pode ser 0'));
  }

  if (req.body.depositoMensal === 0) {
    return res.status(400).send(new Error('Depósito mensal não pode ser 0'));
  }

  if (req.body.meses === 0) {
    return res.status(400).send(new Error('Meses não pode ser 0'));
  }

  next();
}

app.post('/', validateEmpty, validateNotZero, (req, res) => {
  const { juros, valorInicial, depositoMensal, meses } = req.body;

  const tabelaJuros = [];

  const itemInicial = {
    mes: 1,
    deposito: valorInicial,
    juros: 0,
    total: valorInicial.toFixed(2),
  };

  tabelaJuros.push(itemInicial);

  let valorAtual = valorInicial;

  for (let i = 1; i < meses; i++) {
    const jurosMensal = (valorAtual * juros) / 100;
    valorAtual += jurosMensal + depositoMensal;

    tabelaJuros.push({
      mes: i + 1,
      deposito: depositoMensal,
      juros,
      total: valorAtual.toFixed(2),
    });
  }

  res.send(tabelaJuros);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});