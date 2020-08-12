import React, { useState } from "react";
import "./KinoApp.css";
import Form from "../../components/KinoApp/Form/Form";
import FilmItem from "../../components/KinoApp/FilmItem/FilmItem";

export default function KinoApp(props) {
	const [films, setFilms] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const addFilm = (event) => {
		event.preventDefault();
		if (!inputValue) return;
		if (films.map((elem) => elem.name).indexOf(inputValue) + 1) {
			alert("This film has in list.");
			return;
		}
		setFilms([
			...films,
			{ name: inputValue, id: new Date().getTime() },
		]);
	};
	const changeFilmName = (event, id) => {
		const index = films.findIndex((film) => film.id === id);
		const copyFilms = [...films];
		copyFilms[index].name = event.target.value;
		setFilms(copyFilms);
	};
	const deleteFilm = (id) => {
		const index = films.findIndex((film) => film.id === id);
		const copyFilms = [...films];
		copyFilms.splice(index, 1);
		setFilms(copyFilms);
	};
	const updateInput = (event) => setInputValue(event.target.value);
	return (
		<div
			className="KinoApp"
			style={{ display: props.show ? "block" : "none" }}
		>
			<h3 className="title">Kino app</h3>
			<Form
				addFilm={addFilm}
				inputValue={inputValue}
				updateInput={updateInput}
			/>
			<ul className="filmList">
				{films.map((film) => (
					<FilmItem
						key={film.id}
						name={film.name}
						id={film.id}
						changeFilmName={changeFilmName}
						deleteFilm={deleteFilm}
					/>
				))}
			</ul>
		</div>
	);
}
