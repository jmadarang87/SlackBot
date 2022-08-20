require('dotenv').config();
const axios = require('axios');

module.exports = async () => {
	const options = {
		url: `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random`,
		method: 'GET',
		headers: {
			accept: 'application/json',
			'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
			'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
		},
	};

	// let response = await request(options);
	let response = await axios(options);
	return response.data.value;
};
