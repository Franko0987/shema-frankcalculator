const express = require('express');
const app = express();
const port = 3000;

function multiplyTheNumbers(numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}

app.get('/add', (req, res) => {
  const numbers = req.query.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.send({ sum });
});

app.get('/multiply', (req, res) => {
  const numbers = req.query.numbers;
  const product = multiplyTheNumbers(numbers);
  res.send({ product });
});

app.listen(6000, () => {
  console.log(`My calculator app is now  listening at http://localhost:${6000} which is now running`);
});