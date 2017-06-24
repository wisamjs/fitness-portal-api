module.exports = function() {

	const monk = require('monk');
	const mongoUrl = require('../../../config').mongoUrl;
	const db = monk(mongoUrl);
	const collection = db.get('workingSets');

	const list = async (ctx) => {
	  const res = await collection.find({});
	  ctx.body = res;
	}

	const add = async (ctx) => {
		const res = await collection.insert(ctx.request.body);
		ctx.status = 200;
	}

	return {
		list,
		add
	}
}();