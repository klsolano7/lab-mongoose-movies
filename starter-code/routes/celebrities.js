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

router.post('/new', (req, res, next) =>{
  console.log("celebs post route for new celeb ========= ", req.body);
  const {name, occupation, catchphrase} = req.body;
  const newCeleb = new Celeb({ name, occupation, catchphrase})
  newCeleb.save()
  .then((data) =>{
    console.log("info after saving celeb ----------", data);
    res.redirect('/celebrities/new')
  })
})

router.post('/:id/delete', (req, res, next)=>{
  Celeb.findByIdAndDelete(req.params.id).then(deleted => {
    res.redirect('/celebrities');
  }).catch(err => {res.json(err)})
})

module.exports = router;
