import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (s1, s2) {
  return [...s1].map((e, i) => `${e}${s2[i]|| ""}`).join("");
};

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myinput1 = useRef(null);
  const myinput2 = useRef(null);

  useEffect(
    function () {
      count.current++;
      myinput2.current.focus();
    },
    [value1]
  );

  useEffect(
    function () {
      count.current++;
      myinput1.current.focus();
    },
    [value2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercise #01" />
      <div className="center">
        <div>
          <span className="text">Value:</span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <div className="center">
          <input
            type="text"
            className="input"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            ref={myinput1}
          />
        </div>
      </div>
      <SectionTitle title="Exercise #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          ref={myinput2}
        />
      </div>
    </div>
  );
};

export default UseRef;
