const fs = require('fs');

function NavList(_, res) {
	const jsonData = fs.readFileSync('pages/api-data/get-nav-lists.json');
	res.status(200).json(JSON.parse(jsonData));
}

export default NavList;
