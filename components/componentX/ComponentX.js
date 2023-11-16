import { useState } from "react";
import styles from "./styles.module.css";

const ComponentX = () => {
  const [isShowComponent, setIsShowComponent] = useState(true);

  return (
    <>
      <button onClick={() => setIsShowComponent(!isShowComponent)}>
        Click
      </button>

      {isShowComponent && (
        <footer className={styles.footer}>
          <span>©xxxxx</span>
        </footer>
      )}
    </>
  );
};

export default ComponentX;
