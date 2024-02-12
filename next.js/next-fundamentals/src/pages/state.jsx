import Layout from "../components/Layout";
import { useState} from 'react';

export default function State() {
//   let num = 9;

  const [num, setNum] = useState(0) //Hooks

  function inc() {
    setNum(num+1)
  }

  return (
    <Layout title="Component with state">
      <span>{num}</span>
      <button onClick={inc}>Inc</button>
    </Layout>
  );

}
