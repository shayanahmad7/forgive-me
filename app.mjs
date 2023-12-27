import express from 'express';
const app = express();

// Use the environment variable for the port, if available; otherwise, use port 3000
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
