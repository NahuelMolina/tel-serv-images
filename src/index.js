const fs = require('fs');
const http = require('https');
const url = require('./dog-api').url;


http.get(url, (res) => {
	const {statusCode} = res;
	console.log(`Status code: ${statusCode}`);
	
	res.on('data', d => {
		
		let data = JSON.parse(d);
		let url = data.message;
		let out_file = fs.createWriteStream('./images/myExamp.jpg');
		console.log(`URL: ${url}`);
		http.get(url, (res) => {
			console.log(`Status: ${res.statusCode}`);
			res.pipe(out_file);
		});
	});
});
