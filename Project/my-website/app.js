const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
