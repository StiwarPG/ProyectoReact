const express = require('express');
const router = express.Router();


const Productos = require('../models/productos');
const { model, Model } = require('mongoose');

router.get('/', async (req, res) => {
    const productos = await Productos.find();
    res.render('index', {
        title: 'FusionSport',
        productos: productos
   });
});

router.post('/add',async(req, res) => {
   
    let productos = new Productos(req.body);
    await productos.save();
    console.log(productos);
    res.redirect('/');

    
  });


  router.get('/edit/:id', async (req, res) => {
    const productos = await Productos.findById(req.params.id).lean();
    res.render('edit', {productos})
  });

  router.post('/edit/:id', async (req, res) => {
    
    const productos = await Productos.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  });

    

    router.get('/delete/:id', async (req, res) => {
      await  Productos.findByIdAndDelete(req.params.id);
      res.redirect('/');
      });
  
  
  
module.exports = router;
