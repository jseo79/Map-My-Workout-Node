import express from 'express';
import cors from 'cors';
import workoutRoutes from './src/modules/workout/routes/workout-routes';
import usersRoutes from './src/modules/users/routes/user-routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', usersRoutes);
app.use('/api', workoutRoutes);

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
