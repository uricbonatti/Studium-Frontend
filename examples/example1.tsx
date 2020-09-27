import React, { useState, useEffect } from "react";
import exampleQuery from "../../graphql/querys/exampleQuery";
import api from "../../services/api";

interface Rate {
  currency: string;
  rate: string;
}
/*
Lembrando: a "query" retorna 3 valores: 
->  loading: que é um booleano para aguardando retorno,
->  error: erro referente ao processo de query
-> data: um Array ([]) de dados retornados

Obs.: optei por não utilizar os Apollo Hooks por causa da tipagem e devido a
problemas com os parametros da resposta loading e error.
*/
const Example: React.FC = () => {
  const currency = "USD";
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(() => {
    api
      .query({ query: exampleQuery, variables: { currency } })
      .then((response) => {
        setRates(response.data.rates);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {rates.map(({ currency, rate }: Rate) => (
        <p key={currency}>
          {currency}: {rate}
        </p>
      ))}
    </div>
  );
};

export default Example;
