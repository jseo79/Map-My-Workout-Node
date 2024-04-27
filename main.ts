import express from 'express';

const app = express();
const port = 5001;
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// app.post('/api/workout', (req, res) => {
// 	const result = await addWorkoutToDB(req.body);
// 	doSomeCheckOntheRequestStructure();
// 	res.status(400).json({
// 		message: 'Invalid entry',
// 		invalidValues: ['type', 'distance'],
// 	});
// 	if (result.error()) {
// 		res.status(500).send('Oops DB error');
// 	}
// 	res.json(req.body);
// });

// app.get('/api/workout/:id', (req, res) => {
// 	res.json(getWorkout(req.params.id));
// });

app.get('/api/workouts', (req, res) => {
	res.json([]);
});

app.post('/api/workout/summary?startDate=&endDate=', (req, res) => {
	res.json([]);
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});

// function addWorkoutToDB(workout) {
// 	sql.query(`
// 	INSERT INTO workouts
// 	id=123,
// 	type=${workout.type}
// 	distance=${workout.distance}

// 	`);
// }
