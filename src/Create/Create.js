import styles from "./Create.module.css";
import {useState} from "react";

function Create({createHandler, cancelCreating}) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(null);
  const [plot, setPlot] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [runtime, setRuntime] = useState(null);
  const [genres, setGenres] = useState('');
  const [actors, setActors] = useState('');
  const [director, setDirector] = useState('');

  const create = () => {
    createHandler({
      title,
      year,
      plot,
      posterUrl,
      runtime,
      genres: genres.split(';'),
      actors: actors.split(';').join(', '),
      director,
    });
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
            placeholder="Введите автеров (через ;)"
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
          onClick={cancelCreating}
        >
          Отмена
        </button>
        <button
          className={styles.SaveBtn}
          onClick={() => create()}
        >
          Создать
        </button>
      </div>
    </div>
  );
}

export default Create;
