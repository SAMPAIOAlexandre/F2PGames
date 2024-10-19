import { useEffect, useState } from "react";
import "./App.css";
import type { IGame } from "../../@types/types";

function App() {
	const [games, setGames] = useState<IGame[]>([]);

	useEffect(() => {
		const fetchGames = async () => {
			const response = await fetch(
				"https://free-to-play-games-database.p.rapidapi.com/api/games",
				{
					method: "GET",
					headers: {
						"X-RapidAPI-Key":
							"e20442b6ddmsh560201c632b81e1p1bdb64jsndf96878aec9f",
						"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
					},
				},
			);
			const data = await response.json();
			setGames(data);
			console.log(data);
		};
		fetchGames();
	}, []);

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card"></div>
			<p className="read-the-docs">ok</p>
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;
