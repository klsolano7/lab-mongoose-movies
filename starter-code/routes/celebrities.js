const express = require('express');
const router  = express.Router();
const Celeb = require("../model/celebrity")


router.get('/', (req, res, next) => {
  Celeb.find()
  .then(celebs =>{
    console.log('whatever', celebs)
    res.render('celeb/celebrities', {celebs});
  })
  .catch((error) => {
    console.log(error);
  })
});


router.get('/detail/:id', (req,res,next) => {
  Celeb.findById(req.params.id)
  .then(details =>{
    console.log('details', details);
    res.render('celeb/show', {details})
  })
  .catch((error) => {
    console.log(error);
  })
});
//celebrities/new
router.get('/new', (req,res,next) => {
    res.render('celeb/new')
});

router.post('/celebrities', (req, res, next) =>{
  const {name, occupation, catchphrase} = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchphrase})
  newCeleb.save()
  .then((data) =>{
    res.redirect('/celebrity/new')
  })
})



module.exports = router;
