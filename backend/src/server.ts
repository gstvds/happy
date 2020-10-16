import express from 'express';

import 'database/connection';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(PORT);
