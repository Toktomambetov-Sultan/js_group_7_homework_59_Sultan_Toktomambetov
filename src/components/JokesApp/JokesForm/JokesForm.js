import React from "react";
import "./JokesForm.css";
export default function JokesForm(props) {
	return (
		<form onSubmit={props.getJokes}>
			<div className="Form">
				<span className="description">count of jokes</span>
				<input
					className="add-count-input"
					type="text"
					onChange={props.changeInputValue}
					value={props.countOfJokes}
				/>
				<button className="get-jokes-button">get</button>
			</div>
		</form>
	);
}
