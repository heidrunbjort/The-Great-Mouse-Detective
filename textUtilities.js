var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase (title) {
	return title;
}

expect(titleCase('the greate mouse detective')).to.be.a('string');