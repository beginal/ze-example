const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();

db.sequelize.sync()
.then(() => {
  console.log('db 연결 성공')
})
.catch(console.error);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// front에서 받아온 데이터를 req.body 안에 넣어주는 역할
// 꼭 라우터보다 상단에 위치해야 함.


app.get('/', (req, res) => {
  //get이 메소드 '/'이 URL
  res.send('hello express');

})

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중')
})
