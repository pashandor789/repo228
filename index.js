const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Простая функция для тестирования
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// API endpoints
app.get('/', (req, res) => {
    res.json({ message: 'Hello World! GitHub Actions работает!' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/add/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const result = add(a, b);
    res.json({ a, b, result });
});

// Запуск сервера только если файл запущен напрямую
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Сервер запущен на порту ${port}`);
    });
}

// Экспорт функций для тестирования
module.exports = { add, multiply, divide, app };
