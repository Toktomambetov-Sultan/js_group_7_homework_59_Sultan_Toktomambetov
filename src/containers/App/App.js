import React, { useState } from "react";
import "./App.css";
import KinoApp from "../KinoApp/KinoApp";
import Jokes from "../JokesApp/JokesApp";

function App() {
	const [appIsJokes, setAppIsJokes] = useState(false);
	return (
		<div className="container">
			<div className="App">
				<span className="change-app">
					<input
						type="checkbox"
						onChange={(e) => setAppIsJokes(e.target.checked)}
					/>
				</span>
				<KinoApp show={!appIsJokes} />
				<Jokes show={appIsJokes} />
			</div>
		</div>
	);
}

export default App;
