const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

// index 접속
app.use('/', router);


//공통
app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/project', express.static('project'));

router.get('/action', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.id)
    });


//SoyeongSong
router.get('/logout', function(req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.txtEmail + ', ' + req.query.txtPwd + ', ' + req.query.chkMe + ', '+ req.query.slcList_s + ', ' + req.query.slcList_m + '<br /><br /><a href=\'javascript:history.back();\'>back</a>')
});
router.get('/member_inf', function(req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.txtEmail + ', ' + req.query.txtPwd + ', ' + req.query.chkMe + ', '+ req.query.slcList_s + ', ' + req.query.slcList_m + '<br /><br /><a href=\'javascript:history.back();\'>back</a>')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))