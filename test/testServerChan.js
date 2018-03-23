var should = require('should');
var serverChan = require('../serverChan');
var moment = require('moment')

describe('invokd', () => {
	it('should invoke request', async() => {
		let {response, body} = await serverChan({key: 'test',text: 'title', desp: 'desc'});
		JSON.parse(body).should.have.property('errno');
	})

	it('should success invoke by my key', async() => {
		let key = 'this is my key which get from serverChan(https://sc.ftqq.com)';
		let {response, body} = await serverChan({key: key, text: 'test message', desp: 'current time is ' + moment().format('YYYY-MM-DD HH:mm:ss')});
		console.log(body);
		let b = JSON.parse(body);
		b.should.have.property('errno').be.equal(0);
	})
})
