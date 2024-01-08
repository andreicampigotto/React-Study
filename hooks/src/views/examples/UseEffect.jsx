import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
  const n = parseInt(num);
  if (n < 0) return "error";
  if (n === 0) return 1;

  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [num, setNum] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [status, setStatus] = useState("Odd");

  useEffect(
    function () {
      setFactorial(calcFactorial(num));
    },
    [num]
  );

  useEffect(
    function () {
      if (factorial > 10) {
        document.title = "uau";
      }
    },
    [factorial]
  );

  useEffect(function () {
    setStatus(num % 2 === 0 ? "Pair" : "Odd")
  }, [num]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <span className="text">Fatcorial: </span>
        <span className="text red">{factorial}</span>
      </div>
      <input
        type="number"
        className="input"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <SectionTitle title="Exercise #02" />
      <div>
        <div className="center">
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
