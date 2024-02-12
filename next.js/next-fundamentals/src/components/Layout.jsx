import Link from "next/Link";
import styles from "../styles/Layout.module.css";

export default function Layout(props) {
  //props only read
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1>{props.title}</h1>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.content}>
        {props.children}
        </div>
    </div>
  );
}
