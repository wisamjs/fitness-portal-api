module.exports = function() {

	const monk = require('monk');
	const mongoUrl = process.env.mongoUrl;
	const db = monk(mongoUrl);
	const collection = db.get('dates');

	const list = async (ctx) => {
	  const res = await collection.find({});
	  ctx.body = res;
	}

	const add = async (ctx) => {
		const res = await collection.insert(ctx.request.body);
		ctx.status = 200;
	}

	const findByName = async (ctx, name) => {
		console.log(name);
		const res = await collection.findOne({name: name});
    console.log(res);
    ctx.body = res;
  }

  const findById = async (ctx, id) => {
		console.log(id);
		const res = await collection.findOne({_id: id});
    console.log(res);
    ctx.body = res;
  }

	return {
		list,
		add,
		findByName,
		findById
	}
}();