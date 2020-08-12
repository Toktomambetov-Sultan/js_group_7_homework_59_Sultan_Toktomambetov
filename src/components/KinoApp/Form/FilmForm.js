import React from "react";
import "./FilmForm.css";

export default function Form(props) {
	return (
		<form onSubmit={props.addFilm}>
			<div className="Form">
				<input
					type="text"
					className="add-record-input"
					value={props.inputValue}
					onChange={props.updateInput}
				/>
				<button className="add-record-button">add film</button>
			</div>
		</form>
	);
}
