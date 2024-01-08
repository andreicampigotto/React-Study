import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UseRef = (props) => {
  const [count, inc, dec] = useCounter();

  const url = "http://files.cod3r.com.br/curso-react/estados.json";

  const response = useFetch(url);

  function showStates(states) {
    return states.map(state => <li key={state.nome}>
        {state.nome} - {state.sigla}
    </li>);
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

      <SectionTitle title="Exercise #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>
            +
          </button>
          <button className="btn" onClick={() => dec()}>
            -
          </button>
        </div>
      </div>
      <SectionTitle title="Exercise #02" />
      <div className="center">
        <ul>
            {!response.loading ? showStates(response.data) : false}
        </ul>
      </div>
    </div>
  );
};

export default UseRef;
