import styles from './Info.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Info({ film, updateClickHandler }) {
  const defaultUrl = 'logo192.png';
  const [posterUrl, setPosterUrl] = useState(defaultUrl);

  useEffect(() => {
    if (!film.posterUrl) {
      setPosterUrl(defaultUrl);
      return;
    }
    axios.get(film.posterUrl)
      .then(() => setPosterUrl(film.posterUrl))
      .catch(() => setPosterUrl(defaultUrl));
  }, [film, defaultUrl]);

  const copyId = () => {
    navigator.clipboard.writeText(film.id);
  }

  return (
    <div className={styles.FilmInfoBlock}>
      <div className={styles.FilmHeaderSection}>
        <span onClick={copyId}>
          ID: {film.id}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 2H2V10C2 10.552 1.55228 11 1 11C0.447715 11 0 10.552 0 10V2C0 0.895581 0.895052 0 2 0H9C9.55229 0 10 0.447962 10 1C10 1.55314 9.55229 2.0011 9 2ZM5 5H12V12H5V5ZM5 14H12C13.1049 14 14 13.1044 14 12V5C14 3.89558 13.1049 3 12 3H5C3.89505 3 3 3.89558 3 5V12C3 13.1044 3.89505 14 5 14Z"
              fill="#333333"
            />
          </svg>
        </span>
        <button onClick={() => updateClickHandler(film)}>Редактировать</button>
      </div>
      <div className={styles.FilmMainSection}>
        <img
          className={styles.PosterImg}
          src={posterUrl}
          alt="Poster"
        />
        <div className={styles.FilmMainSectionText}>
          <div className={styles.FilmMainSectionTitle}>
            <h1>{film.title}</h1>
            <span>{film.director}</span>
          </div>
          <div className={styles.FilmMainSectionInfo}>
            <div className={styles.FilmMainSectionParameters}>
              <span className={styles.FilmMainSectionColumnTitle}>Параметры</span>
              <span>Год: {film.year}</span>
              <span>Длительность: {film.runtime}</span>
            </div>
            <div className={styles.FilmMainSectionActors}>
              <span className={styles.FilmMainSectionColumnTitle}>В главных ролях</span>
              {film.actors.split(', ').map((actor, index) => (
                <span key={index}>{actor}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.FilmDescSection}>
        <h2>Описание</h2>
        <span>{film.plot}</span>
      </div>
    </div>
  )
}

export default Info;