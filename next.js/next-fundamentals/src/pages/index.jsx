import NavBar from "../components/NavBar";
import "../styles/app.css";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <NavBar text="My Style" href='/myStyle' />
      <NavBar text="JSX" href='/jsx' color="crimson" />
      <NavBar text="navigation #01" href='/navigation/' />
      <NavBar text="navigation #02" href='/client/123' color="green" />
      <NavBar text="component with state" href='/state' color="orange" />
      <NavBar text="Integration #01" href='/integration_1' />
      <NavBar text="Static" href='/static' color="#fa054a"/>
    </div>
  );
}
