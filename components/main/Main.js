import styles from "./styles.module.css";
import Article from "../article/article";

const Main = () => {
  return (
    <main className={styles.main}>
      <Article />
      <Article />
    </main>
  );
};

export default Main;
