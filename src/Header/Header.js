import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.Header}>
      <div className="container">
        <span className={styles.Title}>Фильмотека</span>
        <span className={styles.Author}>Ижаев Д. А.</span>
      </div>
    </header>
  )
}

export default Header;
