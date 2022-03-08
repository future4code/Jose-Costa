### Interpretação de código

1) O 'round' é a quantidade de cost que o hash irá realizar para gerar a 'salt' que é uma string com uma sequência de 22 caracteres. Utilizei o valor 12 que é o valor padrão utilizado pelas aplicações e é um meio termo, não causa perca de desempenho e nem põe a integridade do hash em risco.

2) a) Para realizar os testes corretamente é necessário modificar primeiro o endpoint de cadastro porque precisamos gerar uma hash da senha e enviar para o banco o dado criptografado.
c) Não precisamos editar o user/profile porque ele não solicita o password, apenas o token. Numa aplicação real, é como se o usuário já tivesse logado (comaprado senha e o hash) e depois acessado a user/profile.

