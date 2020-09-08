import React from 'react';
import './style/App.scss';
import WeatherGame from "./components/WeatherGame/WeatherGame";
import {Provider} from "react-redux";
import store from "./redux/reducer";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<WeatherGame/>
			</Provider>
		</div>
	);
}

export default App;
