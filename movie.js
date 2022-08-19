const axios = require('axios');
require('dotenv').config();

module.exports = async (movie) => {
	const api_key = process.env.MOVIEAPI;
	const url = `http://www.omdbapi.com/?apikey=${api_key}&t=` + movie;
	const options = {
		url: url,
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
	};
	let response = await axios(options);
	return response.data.Plot;
};
