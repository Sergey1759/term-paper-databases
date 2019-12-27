var express = require('express');
var db = require('../routes/mysql')
const bodyParser = require("body-parser");
var router = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', async function(req, res, next) {
  let data = await db.all();
  console.log(data);
  res.render('index', { title: 'My course work', data});
});
router.get('/edit/:id', async function(req, res, next) {
  let data = await db.one(req.params.id);
  res.render('id', { title: 'My course work', data});
});


router.post('/create',urlencodedParser, async function(req, res, next) {
  if(req.body.command && req.body.exemple && req.body.description){
  db.createCommand(req.body.command);
  db.createExemple(req.body.exemple);
  db.createDescription(req.body.description);
  }  
  res.redirect('/');
});

router.post('/changeExemple', async function(req, res, next) {
  let data = await db.changeExemple(req.body.exemple,req.body.id)
  console.log('req.body');
  console.log(req.body);
  res.redirect(`edit/`+ req.body.id + ``)
});
 
router.post('/Description', async function(req, res, next) {
  let data = await db.changeDescription(req.body.description,req.body.id)
  await console.log(req.body);
  res.redirect(`edit/`+ req.body.id + ``)
});

router.post('/changeCommand', async function(req, res, next) {
  let data = await db.changeCommand(req.body.command,req.body.id)
  console.log(req.body);
  console.log('command')
  res.redirect(`edit/`+ req.body.id + ``)
});

router.post('/search', async function(req, res, next) {
  let data = await db.search(req.body.search)
  console.log(req.body.search);
  console.log(data);
  res.render('search', { title: 'search',data});
});


router.post('/delete', async function(req, res, next) {
  await db.deleteCommand(req.body.id)
  await db.deleteDescription(req.body.id)
  await db.deleteExemple(req.body.id)
  res.redirect('/');
});

module.exports = router;
