import styles from "./styles.module.css";
import carImg from "../../assets/doloream.webp";

const Article = () => {
  console.log(carImg);

  return (
    <div className={styles.article}>
      <img src={carImg.src} />
      <h6>Lietuvoje 2023.11.15 05:30</h6>
      <h2>Legendiniame breiko turnyre Los Andžele – Banevič triumfas</h2>
    </div>
  );
};

export default Article;
