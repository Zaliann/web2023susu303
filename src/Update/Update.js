import styles from "./Update.module.css";
import {useState} from "react";

function Update({film, updateHandler, cancelUpdating}) {
  const [title, setTitle] = useState(film.title);
  const [year, setYear] = useState(film.year);
  const [plot, setPlot] = useState(film.plot);
  const [posterUrl, setPosterUrl] = useState(film.posterUrl);
  const [runtime, setRuntime] = useState(film.runtime);
  const [genres, setGenres] = useState(film.genres.join(';'));
  const [actors, setActors] = useState(film.actors.split(', ').join(';'));
  const [director, setDirector] = useState(film.director);

  const update = () => {
    const updatedFilm = film;
    updatedFilm.title = title;
    updatedFilm.year = year;
    updatedFilm.plot = plot;
    updatedFilm.posterUrl = posterUrl;
    updatedFilm.runtime = runtime;
    updatedFilm.genres = genres.split(';');
    updatedFilm.actors = actors.split(';').join(', ');
    updatedFilm.director = director;

    updateHandler(updatedFilm);
  }

  return (
    <div className={styles.UpdateBlock}>
      <h1>Редактирование</h1>
      <div className={styles.UpdateData}>
        <div>
          <label>Название фильма</label>
          <input
            className={styles.InputText}
            placeholder="Введите название фильма"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label>Год выпуска</label>
          <input
            type={"number"}
            className={[styles.InputText, styles.InputNumber].join(' ')}
            placeholder="Введите год выпусска"
            value={year}
            onChange={event => setYear(event.target.value)}
          />
        </div>

        <div>
          <label>Описание</label>
          <textarea
            className={[styles.InputText, styles.Textarea].join(' ')}
            value={plot}
            onChange={event => setPlot(event.target.value)}
          />
        </div>

        <div>
          <label>Ссылка на обложку</label>
          <input
            className={styles.InputText}
            placeholder="Введите ссылку на обложку"
            value={posterUrl}
            onChange={event => setPosterUrl(event.target.value)}
          />
        </div>

        <div>
          <label>Длительность фильма</label>
          <input
            type={"number"}
            className={[styles.InputText, styles.InputNumber].join(' ')}
            placeholder="Введите длительность фильма в минутах"
            value={runtime}
            onChange={event => setRuntime(event.target.value)}
          />
        </div>

        <div>
          <label>Жанры</label>
          <input
            className={styles.InputText}
            placeholder="Введите жанры (через ;)"
            value={genres}
            onChange={event => setGenres(event.target.value)}
          />
        </div>

        <div>
          <label>Актеры</label>
          <input
            className={styles.InputText}
            placeholder="Введите актеров (через ;)"
            value={actors}
            onChange={event => setActors(event.target.value)}
          />
        </div>

        <div>
          <label>Режиссер</label>
          <input
            className={styles.InputText}
            placeholder="Введите имя режиссера"
            value={director}
            onChange={event => setDirector(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.Footer}>
        <button
          className={styles.CancelBtn}
          onClick={cancelUpdating}
        >
          Отмена
        </button>
        <button
          className={styles.SaveBtn}
          onClick={() => update()}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default Update;
