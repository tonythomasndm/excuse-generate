import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
function App() {
	const [excuse, setExcuse] = useState({});
	const [category, setCategory] = useState("");

	useEffect(() => {
		fetchExcuse("family");
	}, []);

	const fetchExcuse = (option) => {
		Axios.get(`https://excuser-three.vercel.app/v1/excuse/${option}/`).then(
			(response) => {
				setExcuse(response.data[0]);
			}
		);
	};

	return (
		<div className='App'>
			<h1>Generate Excuse</h1>
			<input
				type='text'
				placeholder='family, college, '
				onChange={(event) => setCategory(event.target.value)}
			/>
			<button onClick={() => category !== "" && fetchExcuse(category)}>
				Generate
			</button>
			<h1>Category: {excuse?.category}</h1>
			<h1>Excuse: {excuse?.excuse}</h1>
		</div>
	);
}

export default App;
