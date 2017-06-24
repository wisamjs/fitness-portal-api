const fetch = require('node-fetch');
const R = require('ramda');

const data = require('../../../data.json');
const workouts = data.workouts;
const exercises = data.exercises;
const dates = data.dates;
const workingSets = data.workingSets;

function getFetchOptions(data) {
 return {
 	method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
	}
}

function populate(name, collection) {
	fetch(`http://localhost:3002/${name}`, getFetchOptions(collection)).then(console.log, console.error);
}








