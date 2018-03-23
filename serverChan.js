var req = require('request');

function ServerChan({key = "", text="testTitle", desp="testDesp"}){
	return new Promise((resolv, reject) => {
		console.log(text);
		console.log(desp);
		req.get(encodeURI(`https://sc.ftqq.com/${key}.send?text=${text}&desp=${desp}`),
		  (e,r,b) => {
	  		if(e) {
	  			reject(e);
	  		}
	  		
	  		resolv({
	  		  rep: r,
	  		  body: b
	  		});
	  	});
	});
}

module.exports = ServerChan