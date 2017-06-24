const koa = require('koa');
const route = require('koa-route');
var bodyParser = require('koa-bodyparser');
const app = new koa();

const routes = require('./src/routes/routes');

app.use(bodyParser());
app.use(route.get('/exercises', routes.exercises.list));
app.use(route.get('/exercises/name/:name', routes.exercises.findByName));
app.use(route.get('/exercises/id/:id', routes.exercises.findByName));
app.use(route.post('/exercise/', routes.exercises.add));

app.use(route.get('/dates', routes.dates.list));
app.use(route.post('/dates', routes.dates.add));

app.use(route.get('/workingSets', routes.workingSets.list));
app.use(route.post('/workingSets', routes.workingSets.add));

app.use(route.get('/workouts', routes.workouts.list));
app.use(route.post('/workouts', routes.workouts.add));

app.listen(8080);