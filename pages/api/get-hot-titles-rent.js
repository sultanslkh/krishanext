const fs = require('fs');

function Location(_, res) {
	const jsonData = fs.readFileSync('pages/api-data/get-hot-titles-rent.json');
	res.status(200).json(JSON.parse(jsonData));
}

export default Location;
