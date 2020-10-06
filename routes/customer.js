const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();
const Customer = require('stock_manager/models/Customer')


router.get('/', (req,res) => {
    res.send('All Customers')
})

router.get('/new', (req, res) => {
    res.render('customers/new',{customer: new Customer({})})
})

router.post('/', async(req,res) => {
     let customer = new Customer({
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        // phone: req.body.phone   
    })
   
    
    try{
       customer.save().then(
        () => {
           res.redirect(`customers`)
        }
      ).catch(
        (error) => {
         console.log(error)
        }
      );
      
        console.log(req.body)
        // res.redirect(`authors/${newAuthor.id}`)
        // res.redirect(`customers`)
    }
    catch{
        res.render('customers/new', {
            customer: customer,
            errorMessage: 'Error creating Customer' 
        })
    }
})

module.exports = router