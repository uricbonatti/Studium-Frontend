import { gql } from "@apollo/client";
// A query não precisa ser nomeada, mas é interessante que seja para ser tratada
// como uma função na qual se pode passar parametros, o GQL utiliza variaveis tipadas
// as quais devem ser usadas utilizando o
// => $nome_variavel
// o ponto de exclamação após o tipo da variavel indica que ela não é obrigatoria

const exampleQuery = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

export default exampleQuery;
