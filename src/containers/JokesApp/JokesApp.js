import React, { useState } from "react";
import { useEffect } from "react";
import "./JokesApp.css";
const url = "https://api.chucknorris.io/jokes/random";
export default function JokesApp(props) {
	const [Jokes, setJokes] = useState([]);
	const [countOfJokes, setCountOfJokes] = useState("");
	const initJokes = (int) => {
		const fetchData = async () => {
			const responses = [];
			for (let i = 0; i < int; i++) {
				responses.push(await fetch(url));
			}
			if (
				responses.reduce((acc, item) => {
					if (acc && item.ok) return true;
					return false;
				}, true)
			)
				Promise.all(responses)
					.then((res) => Promise.all(res.map((item) => item.json())))
					.then((res) =>
						setJokes(
							res.map((item) => {
								return { value: item.value, id: item.url };
							})
						)
					);
		};
		fetchData().catch(console.error);
	};
	useEffect(() => {
		initJokes(5);
	}, []);
	const changeInputValue = (event) => {
		const value = event.target.value;
		if (isNaN(+value)) return;
		setCountOfJokes(+value);
	};
	const getJokes = (event) => {
		event.preventDefault();
		initJokes(countOfJokes);
		setCountOfJokes("");
	};
	return (
		<div
			className="JokesApp"
			style={{ display: props.show ? "block" : "none" }}
		>
			<h3 className="title">Jokes app</h3>
			<form onSubmit={getJokes}>
				<div className="form">
					<input
						className="add-count-input"
						type="text"
						onChange={changeInputValue}
						value={countOfJokes}
					/>
					<button className="get-jokes-button">get</button>
				</div>
			</form>
			<ul className="JokesList">
				{Jokes.map((joke) => (
					<li className="joke" key={joke.id}>
						{joke.value}
					</li>
				))}
			</ul>
		</div>
	);
}
