const koa = require('koa');
const route = require('koa-route');
const router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
const app = new koa();

const routes = require('./src/routes/routes');

const CORS = async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	await next();
}

app.use(bodyParser());

router.use('*', CORS);
router.get('/workouts', routes.workouts.list);
app.use(router.routes());
app.use(router.allowedMethods());

// app.use(route.get('/exercises', routes.exercises.list));
// app.use(route.get('/exercises/name/:name', routes.exercises.findByName));
// app.use(route.get('/exercises/id/:id', routes.exercises.findByName));
// app.use(route.post('/exercise/', routes.exercises.add));

// app.use(route.get('/dates', routes.dates.list));
// app.use(route.post('/dates', routes.dates.add));

// app.use(route.get('/workingSets', routes.workingSets.list));
// app.use(route.post('/workingSets', routes.workingSets.add));

// app.use(route.get('/workouts', routes.workouts.list));
// app.use(route.post('/workouts', routes.workouts.add));

app.listen(process.env.PORT || 8080);