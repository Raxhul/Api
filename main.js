
import express, { urlencoded } from 'express'
import route from './route/route.js'
import { connnect } from './database/database.js'

const app = express();
const port = 9999;

// the midllware to request 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('This site is under raghul control')
});

connnect();

 
app.use("/movi",route);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});