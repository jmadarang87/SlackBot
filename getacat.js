const axios = require('axios');

module.exports = async () => {
	let response = await axios({
		url: 'https://api.thecatapi.com/v1/images/search',
		json: true,
	});
	return response.data[0].url;
};
