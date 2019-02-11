let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
