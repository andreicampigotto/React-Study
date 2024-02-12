import Layout from "../components/Layout";
import { useState } from "react";

export default function Integration() {
  const [code, setCode] = useState(1);
  const [client, setClient] = useState("");

  async function getClient(){
    const ans = await fetch(`http://localhost:3000/api/clients/${code}`)
    const data = await ans.json()
    setClient(data)
    
  }

  // fetch(`http://localhost:3000/api/clients/${code}`)
  // .then((resp) => resp.json())
  //   .then((data) => setClient(data));
 

  return (
    <Layout>
      <div>
        <input type="number" value={code} onChange={e => setCode(e.target.value)}/>
      <button onClick={getClient}>
        Get Client 
      </button>
      </div>
      
      <ul>
        <li>Cod: {client.id}</li>
        <li>Name: {client.name}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  );
}
