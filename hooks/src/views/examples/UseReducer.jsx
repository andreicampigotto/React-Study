import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store";
import { numAdd2, login } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">User not found!</span>
        )}
        <span className="text">{state.num}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, "Houston")}>
            login
          </button>
          <button className="btn" onClick={() => numAdd2(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "multi7" })}>
            *7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "div25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numParseInt" })}>
            parse int
          </button>
          <button className="btn" onClick={() => dispatch({ type: "addN" , payload: 9 })}>
            magic number
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
