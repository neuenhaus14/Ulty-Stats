import express from 'express';
import cors from 'cors';
import {sequelize}  from './db/index';

// import router from controller into here to use
import Teams from './db/controllers/Teams';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('api/team', Teams);

app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

//updates models into the database
sequelize.sync();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});