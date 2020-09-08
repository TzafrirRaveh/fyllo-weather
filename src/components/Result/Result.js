import React from "react";

export default function Result({resultByCity}) {
	return (
		<ul>
			{resultByCity.map(city => {
				if(city === 'waiting') return null
				return <li key={city.cityName}>{city.cityName}</li>
			})}
		</ul>
	)
}