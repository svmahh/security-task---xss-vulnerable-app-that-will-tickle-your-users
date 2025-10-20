const express = require('express');
const app = express();

// no middlewares or other routes
// we love sharing our users data with third parties <3

app.get('/search', (req, res) => {
  res.send(`<h1>Results for: ${req.query.q}</h1>`);
});

app.listen(3000, () => console.log('Server on port 3000'));