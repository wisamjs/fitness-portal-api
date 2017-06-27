const koa = require('koa');
const router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
const app = new koa();

const routes = require('./src/routes/routes');

const CORS = async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	await next();
}

app.use(bodyParser());

// Will refactor later
router.use('*', CORS);
router.get('/workouts', routes.workouts.list);
router.get('/exercises', routes.exercises.list);
router.get('/exercises/name/:name', routes.exercises.findByName);
router.get('/exercises/id/:id', routes.exercises.findByName);
router.post('/exercise/', routes.exercises.add);
router.get('/dates', routes.dates.list);
router.post('/dates', routes.dates.add);
router.get('/workingSets', routes.workingSets.list);
router.post('/workingSets', routes.workingSets.add);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 8080);