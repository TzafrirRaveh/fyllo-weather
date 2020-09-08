const API_KEY = '9cff733aee57cb05b63dd4f731c46bc4'

const weatherApi = {
	getCityTemp: function (cityName, cb) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
			.then(result=>result.json())
			.then(cb)
			.catch(err => console.log(err));
	}
}

export default weatherApi;