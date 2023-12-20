import {useState} from "react";
import styles from './List.module.css';
import ListItem from "../ListItem/ListItem";

function List({ films, selectedFilmId, handleSelect, handleCreate }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const filterClosure = (film) => {
    return film.title.toLowerCase().includes(title.toLowerCase()) && (
      genre === '' || film.genres.includes(genre)
    )
  }

  const getGenres = () => {
    const set = new Set();
    films.forEach(film => set.add(...film.genres));
    return [...set].sort();
  }

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  const handleChangeGenre = event => {
    setGenre(event.target.value);
  };

  return (
    <div className={styles.List}>
      <input
        className={[styles.Filter, styles.FilterTitle].join(' ')}
        placeholder="Введите название фильма"
        onChange={handleChangeTitle}
      />
      <select
        className={[styles.Filter, styles.FilterGenre].join(' ')}
        onChange={handleChangeGenre}
      >
        <option value="">
          Выберите жанр
        </option>
        {getGenres().map((genre, index) => (
          <option key={index}>
            {genre}
          </option>
        ))}
      </select>

      <div className={styles.FilmsList}>
        {films
          .filter(filterClosure)
          .map((film, index) => (
            <ListItem
              key={index}
              film={film}
              isSelected={selectedFilmId === film.id}
              onClick={handleSelect}
            />
          )
        )}
      </div>

      <br/>

      <div className={styles.Footer}>
        <span>Найдено: {films
          .filter(filterClosure).length}</span>
        <button onClick={handleCreate}>Добавить</button>
      </div>
    </div>
  )
}

export default List;