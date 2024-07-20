const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Định nghĩa một route cho API
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello, world!',
    timestamp: new Date(),
  };
  res.json(data);
});

// Phục vụ file HTML tĩnh
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
