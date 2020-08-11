import React from "react";
import { useMemo } from "react";
import "./FilmItem.css";

export default function FilmItem(props) {
	const { name, deleteFilm, changeFilmName, id } = props;
	const item = useMemo(
		() => (
			<li className="FilmItem">
				<label>
					<input
						type="text"
						value={name}
						onChange={(event) => changeFilmName(event, id)}
					/>
					<button type="button" onClick={() => deleteFilm(id)}>
						delete
					</button>
				</label>
			</li>
		),
		[name, deleteFilm, id, changeFilmName]
	);
	return item;
}
