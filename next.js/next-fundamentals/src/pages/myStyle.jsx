import Layout from "../components/Layout";
import styles from "../styles/MyStyle.module.css";

export default function MyStyle() {
  return (
    <Layout title="example CSS modularized ">
      <div className={styles.purple}>
        <h1>Style using modules</h1>
      </div>
    </Layout>
  );
}
