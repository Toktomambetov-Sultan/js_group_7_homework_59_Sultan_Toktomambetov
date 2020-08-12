import React, { useState } from "react";
import { useEffect } from "react";
import "./JokesApp.css";
import JokesForm from "../../components/JokesApp/JokesForm/JokesForm";
import JokesItem from "../../components/JokesApp/JokesItem/JokesItem";
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
			<JokesForm
				changeInputValue={changeInputValue}
				countOfJokes={countOfJokes}
				getJokes={getJokes}
			/>
			<ul className="JokesList">
				{Jokes.map((joke) => (
					<JokesItem key={joke.id} value={joke.value} />
				))}
			</ul>
		</div>
	);
}
