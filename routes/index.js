var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', des: 'dsa' });
});

router.get('/facturas', (req, res) => {
  // codigo de la consulta
  const facturas = ['factura1', 'factura2', 'factura3']
  res.render('factura', { facturas })
})

module.exports = router;
