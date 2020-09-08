import React, {useEffect, useState} from "react";

export default function QuestionArea({cityName, submitAnswer}) {
	let [inputValue, setInputValue] = useState('');
	
	return (
		<div>
			<h1>{cityName}</h1>
			<label>Your guess: <input key={cityName} onChange={setInputValue} placeholder={'what the degree'}/></label>
			<button onClick={() => submitAnswer(inputValue)}>check your answer</button>
		</div>
	)
}