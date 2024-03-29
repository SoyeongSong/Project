const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Main_page.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/detail', function (req, res) {
    console.log(req.query.email);
    res.send('Request parameters : ' + req.query.email)
});
router.get('/login', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.txtId + ',' + req.query.txtPwd)
});
router.get('/join', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.username + ',' + req.query.password1)
});

app.use('/', router);

app.use('/study', express.static('study'));
app.use('/project', express.static('project'));
app.use('/Healthier', express.static('Healthier'));


//Soyeong
router.get('/logout', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.txtEmail + ', ' + req.query.txtPwd + ', ' + req.query.chkMe + ', ' + '<br><br><a href=\'javascript:history.back();\'>BACK</a>')
});
router.get('/member_inf', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.username + ', ' + req.query.email + ', ' + req.query.phone + ', ' + req.query.address + ', ' + req.query.country + ', ' + req.query.gender + '<br /><br /><a href=\'javascript:history.back();\'>back</a>')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

