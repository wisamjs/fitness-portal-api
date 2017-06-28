module.exports = function() {
	const exercises = require('./exercises/exercises');
	const dates = require('./dates/dates');
	const workingSets = require('./workingSets/workingSets');
	const workouts = require('./workouts/workouts');
	const levels = require('./levels/levels');
	const standards = require('./standards/standards');
	return {
		exercises,
		dates,
		workingSets,
		workouts,
		levels,
		standards
	}

}();