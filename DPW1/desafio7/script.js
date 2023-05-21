const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value;
    const sexo = form.sexo.value;
    const idade = parseInt(form.idade.value);

    if (sexo == 'feminino' && idade < 25) {
        imprimirMensagem(true);
        return;
    }

    imprimirMensagem(false);
});


function imprimirMensagem(booleana) {
    const mensagem = document.querySelector('#mensagem');

    mensagem.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = booleana ? 'ACEITA' : 'NÃO ACEITA';

    mensagem.appendChild(p);
}