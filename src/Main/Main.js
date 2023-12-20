import List from "../List/List";
import Info from "../Info/Info";
import {useEffect, useState} from "react";
import NotSelected from "../NotSelected/NotSelected";
import Update from "../Update/Update";
import axios from "axios";
import Create from "../Create/Create";

function Main() {
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const getFilms = () => {
    axios.get('http://localhost:3001/movies')
      .then(response => setFilms(response.data));
  }
  useEffect(getFilms, []);

  const clickUpdateHandler = () => {
    setIsCreate(false);
    setIsUpdate(true);
  }
  const clickCreateHandler = () => {
    setIsUpdate(false);
    setIsCreate(true);
  }
  const cancelUpdating = () => setIsUpdate(false);
  const cancelCreating = () => setIsCreate(false);
  const filmUpdated = (updatedFilm) => {
    axios.put(`http://localhost:3001/movies/${updatedFilm.id}`, updatedFilm);
    setIsUpdate(false);
  }
  const filmCreated = (createdFilm) => {
    axios.post('http://localhost:3001/movies', createdFilm);
    setIsCreate(false);
    getFilms();
  }

  const handleSelectFilm = (selectedFilm) => {
    setIsUpdate(false);
    setIsCreate(false);
    setFilm(film?.id === selectedFilm.id ? null : selectedFilm);
  };

  const renderBlock = () => {
    if (isUpdate) {
      return <Update
        film={film}
        updateHandler={filmUpdated}
        cancelUpdating={cancelUpdating}
      />;
    }
    if (isCreate) {
      return <Create
        createHandler={filmCreated}
        cancelCreating={cancelCreating}
      />;
    }
    if (film) {
      return <Info
        updateClickHandler={clickUpdateHandler}
        film={film}
      />;
    }
    return <NotSelected/>;
  }

  return (
    <div className="container">
      <List
        films={films}
        selectedFilmId={film?.id}
        handleSelect={handleSelectFilm}
        handleCreate={clickCreateHandler}
      />
      {renderBlock()}
    </div>
  );
}

export default Main;