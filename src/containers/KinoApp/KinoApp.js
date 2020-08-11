import React, { Component } from "react";
import "./KinoApp.css";

export default class KinoApp extends Component {
	state = {
		films: [],
		inputValue: "",
	};
	addFilm = (event) => {
		event.preventDefault();
		if (!this.state.inputValue) return;
		if (
			this.state.films
				.map((elem) => elem.name)
				.indexOf(this.state.inputValue) + 1
		) {
			alert("This film has in list.");
			return;
		}
		this.setState({
			...this.state,
			films: [
				...this.state.films,
				{
					name: this.state.inputValue,
					id: new Date().getTime(),
				},
			],
			inputValue: "",
		});
	};
	changeFilmName = (event, id) => {
		const index = this.state.films.findIndex((film) => film.id === id);
		const copyFilms = [...this.state.films];
		copyFilms[index].name = event.target.value;
		this.setState({
			...this.state,
			films: copyFilms,
		});
	};
	deleteFilm = (id) => {
		const index = this.state.films.findIndex((film) => film.id === id);
		const copyFilms = [...this.state.films];
		copyFilms.splice(index, 1);
		this.setState({
			...this.state,
			films: copyFilms,
		});
	};
	render() {
		return (
			<div className="KinoApp">
				<h3 className="title">Kino app</h3>
				<form onSubmit={this.addFilm}>
					<div className="form">
						<input
							type="text"
							className="add-record-input"
							value={this.state.inputValue}
							onChange={(event) =>
								this.setState({
									...this.state,
									inputValue: event.target.value,
								})
							}
						/>
						<button className="add-record-button">add film</button>
					</div>
				</form>
				<ul className="filmList">
					{this.state.films.map((film) => (
						<li key={film.id}>
							<label>
								<input
									type="text"
									value={film.name}
									onChange={(event) =>
										this.changeFilmName(event, film.id)
									}
								/>
								<button
									type="button"
									onClick={() => this.deleteFilm(film.id)}
								>
									delete
								</button>
							</label>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
