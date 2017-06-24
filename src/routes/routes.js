module.exports = function() {
	const exercises = require('./exercises/exercises');
	const dates = require('./dates/dates');
	const workingSets = require('./workingSets/workingSets');
	const workouts = require('./workouts/workouts');
	return {
		exercises,
		dates,
		workingSets,
		workouts
	}

}();