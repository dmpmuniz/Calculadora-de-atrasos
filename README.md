
# Calculadora de Atraso

Este é um webapp simples, desenvolvido para facilitar o cálculo de atraso na devolução de livros em bibliotecas. A ideia surgiu de uma necessidade real na biblioteca onde trabalho, onde os funcionários tinham que calcular manualmente o número de dias de atraso e determinar a suspensão do usuário, contando dias diretamente em um calendário. Este processo era trabalhoso e sujeito a erros.

## Funcionalidades

- **Cálculo do atraso**: Insira as datas de retirada, devolução prevista e devolução realizada, e o sistema calcula automaticamente o número de dias de atraso.
- **Período de suspensão**: O webapp informa até quando o usuário ficará suspenso, considerando um período equivalente ao atraso, com um limite máximo de 3 meses.
- **Interface simples e prática**: Ideal para uso diário em bibliotecas ou outras instituições que precisem gerenciar atrasos e suspensões.

## Como usar

1. Preencha os campos de data: 
   - Data de retirada do livro.
   - Data prevista para a devolução.
   - Data em que o livro foi efetivamente devolvido.
2. Clique no botão **Calcular**.
3. O sistema exibirá:
   - O número de dias de atraso (se houver).
   - A data final da suspensão do usuário.

## Tecnologias utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica para cálculo dos atrasos e suspensões.

## Exemplo de uso

Caso um livro deva ser devolvido no dia 10/01/2025, mas só seja devolvido em 15/01/2025:
- O sistema calcula que o atraso foi de 5 dias.
- A suspensão do usuário será até 20/01/2025 (5 dias de suspensão).
- Se o atraso levar a uma suspensão superior a 3 meses, o sistema limita a suspensão ao máximo permitido.

## Contribuindo

Sugestões, melhorias e correções são sempre bem-vindas! Você pode acessar este projeto e outros no meu GitHub:
[https://github.com/dmpmuniz](https://github.com/dmpmuniz)

## Autor

Desenvolvido por **Daniel Muniz** (2025 - Versão 1.0).
