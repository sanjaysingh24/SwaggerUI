import express from 'express';
import cors from 'cors';
import { connectDb } from './db/dbconnect.js';
import { Userrouter } from './Routes/user.route.js';
import { createRequire } from "module";
import swaggerUi from 'swagger-ui-express';

const require = createRequire(import.meta.url); // this enables require() in ESM
const swaggerDocument = require("./swagger-output.json"); // ✅ No need for 'assert'
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', Userrouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}   
);