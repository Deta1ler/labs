// Підключаємо Express
const express = require('express');
const path = require('path');

// Створюємо сервер
const app = express();

// Вказуємо папку для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Маршрути на конкретні сторінки (за бажанням)
app.get('/float', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'float.html'));
});

app.get('/flex', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'flex.html'));
});

app.get('/grid', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'grid.html'));
});

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
