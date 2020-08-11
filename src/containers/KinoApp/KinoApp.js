import React, { Component } from "react";
import "./KinoApp.css"

export default class KinoList extends Component {
	render() {
		return (
			<div className="KinoApp">
				<form>
					<input type="text" className="add-record-input" />
					<button className="add-record-button"> </button>
				</form>
			</div>
		);
	}
}
