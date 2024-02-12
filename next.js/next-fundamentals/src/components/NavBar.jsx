import Link from "next/Link";
import styles from "../styles/NavBar.module.css";

export default function NavBar(props) {
  return (
    <Link href={props.href}>
      <div
        className={styles.navBar}
        style={{
          backgroundColor: props.color ?? "dodgerblue",
        }}
      >
        {props.text}
      </div>
    </Link>
  );
}
