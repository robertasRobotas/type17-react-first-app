import { useState } from "react";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import ComponentX from "../components/componentX/ComponentX";

const Home = () => {
  const [logo, setLogo] = useState("Type17");

  const articles = [
    {
      title:
        "Ryškėja žiemos požymiai: toliau šals, o mišrius kritulius pamažu keis sniegas",
      subtitle: "Lietuvoje 2023.11.16 06:51",
      imgUrl: "https://www.lrt.lt/img/2022/03/30/1228607-702705-756x425.jpg",
    },

    {
      title:
        "Filosofui Mickūnui suteiktas universiteto „Vilnius Tech“ garbės daktaro vardas",
      subtitle: "Kultūra 2023.11.15 13:41",
      imgUrl: "https://www.lrt.lt/img/2023/11/15/1625815-28573-756x425.jpg",
    },
  ];

  return (
    <div>
      <button onClick={() => setLogo("xxxxxxx")}>dddd</button>
      <Header logo={logo} />
      <Main articles={articles} />
      <Footer />
      <ComponentX />
    </div>
  );
};

export default Home;
