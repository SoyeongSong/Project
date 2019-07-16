const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))


app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

// index 접속
app.use('/', router);

// 스터디 파일 공유 폴더 접속 가능 경로 생성
// 그냥 study 하위파일은 전체 경로에서 open 가능하게 설정 추후 app.js 경로 공부나 설정 해보시고 싶을때는 말씀 해주시고 수정 하시면 됩니다.
app.use('/study', express.static('study'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))