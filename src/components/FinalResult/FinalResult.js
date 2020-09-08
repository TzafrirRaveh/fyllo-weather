import React from "react";

export default function FinalResult({isSuccess}){
	if(isSuccess) {
		return (
			<div>
				<h1>WOW you did it!!!</h1>
			</div>
		)
	}
	
	return (
		<div>
			<h1>Try again next time</h1>
		</div>
	)
}