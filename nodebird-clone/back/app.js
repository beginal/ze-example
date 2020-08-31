const http = require('http');
const express = require('express')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.method === 'GET') {

  } else if (req.method === 'POST') {

  } else if (req.method === 'DELETE') {

  }
  res.write('Hello World')
  res.end('Hello node');
});
server.listen(3065, () => {
  console.log('서버 실행 중')
});