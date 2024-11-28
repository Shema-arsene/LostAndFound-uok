import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import config from './config';
import dbConnect from './database';
import routes from './routes';

const app = express();
dbConnect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.enable('trust proxy');
app.use(cors());

app.use('/api', routes);

app.get('/', (_req, res) => {
  return res
    .json({
      message: 'Welcome to the Lost & Found API',
    })
    .status(200);
});

const port = config.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started - URL: http://localhost:${port}/`);
});
