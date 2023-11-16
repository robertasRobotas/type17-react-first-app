import styles from "./styles.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">some link</a>
          </li>
          <li>
            <a>another link</a>
          </li>
          <li>
            <a>third link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
