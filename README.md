# Desafio de Desenvolvimento para Web

## Como executar os desafios

### Para o DPW1:

 - Clone o repositório

```bash
git clone https://github.com/Huijiro/Desafio-DPW
```

 - Acesse a pasta do desafio

```bash
cd DPW1\desafio${NUMERO_DO_DESAFIO}
```

 - Abra o arquivo index.html no seu navegador

 ### Para o DPW2:

- Instale o [Docker](https://www.docker.com/products/docker-desktop/)

- Clone o repositório

```bash
git clone https://github.com/Huijiro/Desafio-DPW
```

 - Acesse a pasta do desafio

```bash
cd DPW2
```

 - Com o [Docker](https://www.docker.com/products/docker-desktop/) instalado, execute o comando:

```bash
docker-compose up
```

 - Abra o navegador e acesse o endereço:

```bash 
http://localhost:5173
```

<details>
    <summary>Sem o Docker</summary>

- Instale o [Node.js](https://nodejs.org/en/download/)

- Acesse a pasta do desafio

```bash
cd DPW2
```
- Instale as dependências do projeto para o backend
```bash
cd backend && npm install
```
- Instale as dependências do projeto para o frontend
```bash
cd frontend && npm install
```
- Execute o backend
```bash
npm start
```
- Execute o frontend
```bash
npm run dev
```
- Abra o navegador e acesse o endereço:
```bash
http://localhost:5173
```
</details>