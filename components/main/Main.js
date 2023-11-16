import { useState } from "react";

import styles from "./styles.module.css";
import Article from "../article/Article";

const Main = ({ articles }) => {
  // const [articleTitle, setArticleTitle] = useState("xxxxx");
  // const [articleSubtitle, setArticleSubtitle] = useState("yyyy");

  return (
    <main className={styles.main}>
      <Article
        title={articles[0].title}
        subtitle={articles[0].subtitle}
        imgUrl={articles[0].imgUrl}
      />
      <Article
        title={articles[1].title}
        subtitle={articles[1].subtitle}
        imgUrl={articles[1].imgUrl}
      />
    </main>
  );
};

export default Main;
