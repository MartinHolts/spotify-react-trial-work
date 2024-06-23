import { useEffect, useState } from "react";
import './App.css';

function App() {
	const CLIENT_ID = "4b68c0c6d7014e1ea92ea2109b3ddb93";
	const REDIRECT_URI = "http://localhost:3000/";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	const [token, setToken] = useState("")

	useEffect(() => {
		const hash = window.location.hash
		let token = window.localStorage.getItem("token")

		// getToken()
		if (!token && hash) {
			token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

			window.location.hash = ""
			window.localStorage.setItem("token", token)
		}

		setToken(token)

	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<h1>Spotify React</h1>
				{!token ?
					<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
						to Spotify</a>
					: <button disabled>Logout</button>}

			</header>
		</div>
	);
}

export default App;
