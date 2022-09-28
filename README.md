# Catasdro-de-Clientes
<p>Projeto desenvolvido com Typescript, React, e PostgreSQL</p>

<p>Projeto Fullstack que simula a criação de contas e acesso ao um banco de dados onde são cadastrados clientes e seus contatos de email e telefone. Um funcionário pode ser cadastrado e então realizar e então ter acesso ao controle de clientes alteração e exclusão dos clientes.</p>
<p>Os próprios funcionários podem ser classificados como "Ativo" ou "Inativo", ou até mesmo excluídos, simulando um bloqueio temporário do sistema.</p>

<h3 align ='center'>Tecnologias</h3>

<p align ='center'>
As tecnologias utilizadas no Front-end foram: React | React-router-dom | Typescript | Styled-components | Axios
No Back-end:  Typescript | PostgreSQL | Express | Typeorm | Repository Pattern | Class Transformer | Error Global.
</p>

<h1 align ='center'>API</h1>

<p>Link para acesso ao servidor local: http://localhost:3001</p>

# Endpoints

<p>
A api contem 15 endpoints, sendo necessário realizar um cadastro inicial como funcionário, para apenas depois ter acesso ao login e poder utilizar as suas funcionalidades.
</p>

<br />
<br />
<br />
<br />

## Rotas de funcionário

Para realizar o cadastro e ter acesso as funcionalidades do sistema.

`POST /employee/register`

<h2 align ='center'> Requisição </h2>

```json
{
	"username": "Funcionário",
	"password": "Teste1234"
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"username": "Funcionário",
	"is_active": true,
	"date": "2022-09-26T18:33:42.476Z",
	"id": "a18e8fa0-d905-46ef-b5e3-5cff20485f1c"
}
```

<h2 align ='center'> Possível erro </h2>

Caso o usuário já exista no banco, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 409`

```json
{
	"message": "Username já existe"
}
```


<h2 align ='center'> Realizar Login </h2>


`POST /employee/login`

<h2 align ='center'> Requisição </h2>

```json
{
	"username": "Funcionário",
	"password": "Teste1234"
}
```

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzZGE0MmEhRsM4ZjktNGYyMS1iODYyLTgyNTY5YTk2ODk3NyIsInVzZXJuYW1lIjoiUGF1bG8g0zLb3IiLCJpc19hY3RpdmUiOnRydWUsImlhdCI6MTY2NDMxOTQ2MSwiZXhwIjoxNjY0MzYyNjYxfQ.WMrqTWY77KqkVVXvxEc1bOC5iNcaZPYrpIW-dAeRkkc"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso as informações não sejam válidas, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 409`

```json
{
	"message": "Username ou senha inválidos"
}
```

<h2 align ='center'> Listando todos os funcionários </h2>

Para listar todos os funcionários, o usuário deverá estar logado.

`GET /employees`

` FORMATO DA RESPOSTA - STATUS 200`
```json
[
{
		"id": "f13b1371-afaa-4015-824c-8e944c62c4c1",
		"username": "Funcionário",
		"is_active": true,
		"date": "2022-09-26T15:00:46.722Z"
	}
]
```

<h2 align ='center'> Possíveis erros </h2>

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
	"Error": "Token inválido"
}

```

<h2 align ='center'> Deletar funcionário0 </h2>

Para deletar funcionários, o usuário deverá estar logado.

`DELETE /employee/:id`

` FORMATO DA RESPOSTA - STATUS 204`


<h2 align ='center'> Possíveis erros </h2>

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
	"Error": "Token inválido"
}

```

