# Smart Saloon
Trabalho 2 da matéria Software Engineering Development

| [Vídeo no youtube](#) | [Apresentação](https://drive.google.com/file/d/1wt14H7uKF8qXNFM7AFxFJBMvfgvh6HRe/view?usp=sharing)  |
| --------------------- |:---------------------------------------------------------------------------------------------------:|

## Sobre o sistema
O Smart Saloon é um app simples de gestão de agendamento e clientes em salões de beleza. Com ele é possível fazer a administração de clientes, funcionários, agendamentos e produtos em estoque.

## Inicializando
Tudo é controlado pelo arquivo **docker-compose.yaml**, basta acessar a pasta raiz e executar o comando `docker-compose up`.

Pode ser que seja necessário rodar o `docker-compose up` uma segunda vez na primeira inicialização, pois o composer do PHP finaliza os processos após realizar a instalação das dependências

Pronto! O sistema pode ser acessado pelas seguintes URLs:

- http://localhost:3000 - Front-end
- http://localhost:3001 - Back-end
- http://localhost:8080 - Adminer (Controle do Banco de dados)
