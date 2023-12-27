// app.mjs
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
