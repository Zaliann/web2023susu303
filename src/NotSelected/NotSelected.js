import styles from './NotSelected.module.css';

function NotSelected() {
  return (
    <div className={styles.FilmNotSelected}>
      <span>Фильм не выбран</span>
    </div>
  );
}

export default NotSelected;
