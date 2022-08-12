# Desafio
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

# Como testar
  Por padrão, o servidor nodeJs está esperando 60s após sua inicialização por uma resposta do banco de dados. É possível alterar isso na no entrypoint de app do docker-compose em  -timeout.
  
  - Rode o comando "docker-compose up" e espere a mensagem "Rodando na porta 3000"
  - Acesse http://localhost:8080 e deve aparecer o título Full Cycle Rocks! e a lista de nomes.

# Cadastrando um nome
  É possível cadatrar um nome de duas formas:
  1 - No endpoint GET : 
  http://localhost:8080/name/:nomeParaCadastrar
  Envie no path o nome que deseja cadastrar e deve retornar uma mensagem "Nome inserido com sucesso". O nome também deve aparecer no caminho base "/".
  
  2 - No endpoint POST : 
  http://localhost:8080/
  Envie no body o json:
  {
    "name:" "nomeParaCadastrar"
  }
  Deve retornar uma mensagem "Nome inserido com sucesso". O nome também deve aparecer no caminho base "/".
