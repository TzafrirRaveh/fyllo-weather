import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import weatherApi from "../../util/weatherApi";
import QuestionArea from "../QuestionArea/QuestionArea";
import Result from "../Result/Result";
import store from "../../redux/reducer";
import {answerStatus} from "../../redux/actions";
import FinalResult from "../FinalResult/FinalResult";

// can be replace with other source of cites
const cityName = ['Haifa', 'Atlit', 'Netanya', 'Jerusalem', 'Eilat'];

function WeatherGame({failStatus, questionRemain}) {
	let [currentTempAnswer, setCurrentTempAnswer] = useState(0);
	let [resultByCity, setResultByCity] = useState([])
	let currentCity = cityName[5 - questionRemain];
	useEffect((d) => {
		setResultByCity([
			...resultByCity,
			'waiting'
		])
	}, [questionRemain])
	
	function checkAnswer(tempGuess) {
		setCurrentTempAnswer(tempGuess);
		weatherApi.getCityTemp(cityName[5-questionRemain], answerReach);
	}
	
	const answerReach = (data) => {
		const tempDeviation = Math.abs(data.main.temp - currentTempAnswer);
		const isCorrect = tempDeviation < 5;
		const newResultByCity = [...resultByCity];
		newResultByCity[5-questionRemain] = {
			cityName: currentCity,
			guessTemp: currentTempAnswer,
			realTemp: data.main.temp,
			isCorrect: isCorrect
		}
		
		setResultByCity(newResultByCity);
		
		store.dispatch(answerStatus(isCorrect))
	}
	
	if (failStatus === 3 || questionRemain === 0) {
		return <FinalResult isSuccess={(questionRemain === 0)}/>
	}
	
	return (
		<div key={currentCity}>
			<QuestionArea submitAnswer={checkAnswer} cityName={(cityName[5-questionRemain])}/>
			<Result resultByCity={resultByCity}/>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		failStatus: state.failStatus,
		questionRemain: state.questionRemain
	}
}

export default connect(mapStateToProps)(WeatherGame);