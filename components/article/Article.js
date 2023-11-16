import styles from "./styles.module.css";

const Article = ({ title, subtitle, imgUrl }) => {
  return (
    <div className={styles.article}>
      <img src={imgUrl} />
      <h6>{subtitle}</h6>
      <h2>{title}</h2>
    </div>
  );
};

export default Article;
