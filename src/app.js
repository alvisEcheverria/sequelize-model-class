const express = require("express");
const initModels = require("./models/initModels");
const userRouter = require('./Routes/users.routes');
const taskRouter = require('./Routes/tasks.routes')

const db = require("./utils/database");

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

db.authenticate() 
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) 
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use('/api/v1', userRouter);

app.use('/api/v1', taskRouter);

app.listen(PORT, () => console.log("Servidor corriendo"));
