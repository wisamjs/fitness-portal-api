const koa = require('koa');
const route = require('koa-route');
const app = new koa();

const monk = require('monk');
const mongoUrl = require('./config').mongoUrl;
const db = monk(mongoUrl);
const exercises = db.get('exercises');

const list = async (ctx) => {
  const res = await exercises.find({});
  ctx.body = res;
}

app.use(route.get('/exercises', list));

app.listen(3002);

