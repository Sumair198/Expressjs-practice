const express = require('express')
const router = express.Router()


// router.get('/all',(req,res)=>
// {
//     res.send('All Student')
// })
// router.post('/create',(req,res)=>
// {
//     res.send('create student')
// })
// router.put('/update',(req,res)=>
// {
//     res.send('update student')
// })
// router.delete('/all',(req,res)=>
// {
//     res.send('delete student')
// })

//Controller example
const home = require('../controller/homeController')

// Controller example with hbs
router.get('/controller',home)

module.exports = router


