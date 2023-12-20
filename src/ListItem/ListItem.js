import styles from './ListItem.module.css';

function ListItem({ film, isSelected, onClick }) {
  const getFilmGenres = (genres) => genres.join(', ');

  const htmlClasses = [styles.FilmBlock];
  if (isSelected) {
    htmlClasses.push(styles.Selected);
  }

  return (
    <div
      onClick={() => onClick(film)}
      className={htmlClasses.join(' ')}
    >
      <span className={styles.Title}>{film.title}</span>
      <span className={styles.Info}>{film.year} | {getFilmGenres(film.genres)}</span>
    </div>
  )
}

export default ListItem;