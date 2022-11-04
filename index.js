// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>
// {
//     res.send('hello from express')
// })
// app.get('/contact',(req,res)=>
// {
//     res.send('Contact Page')
// })
// app.get('/about',(req,res)=>
// {
//     res.send('About Page')
// })
// app.listen(2000, ()=>
// {
//     console.log('listening on port 2000')
// })

//Static website using expressjs /get static

// const express = require('express')
// const app = express()
// const path = require('path')

// const staticPath = path.join(__dirname,'staticweb')
// app.use(express.static(staticPath))

// app.get('/',(req,res)=>
// {
//     res.send('hello from express')
// })
// app.listen(2000, ()=>
// {
//     console.log('listening on port 2000')
// })



//dynamic website using expressjs / handlebars / html use dynamic /and go about page

// const express = require('express')
// const app = express()

// app.set('view engine' ,'hbs')

// app.get('/',(req,res)=>
// {
//     res.render('index')
// })
// app.get('/about' , (req , res)=>
// {
//     res.render('about')
// })
// app.listen(2000, ()=>
// {
//     console.log('listening on port 2000')
// })


//static and dynamic both website / delete index file from staticWeb and run in hbs then work
//change dynamic data

// const express = require('express')
// const app = express()
// const path = require('path')

// app.set('view engine' ,'hbs')

// const staticDynamic = path.join(__dirname,'staticweb')
// app.use(express.static(staticDynamic))

// app.get('/',(req,res)=>
// {
//     res.render('index',) 
// })

// app.get('/about' , (req , res)=>
// {
//     res.render('about')
// })
// app.listen(2000, ()=>
// {
//     console.log('listening on port 2000')
// })


//404
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine' ,'hbs')

const staticDynamic = path.join(__dirname,'staticweb')
app.use(express.static(staticDynamic))

app.get('/',(req,res)=>
{
    res.render('index',) 
})
app.get('/about' , (req , res)=>
{
    res.render('about')
})
app.get('*' , (req , res)=>
{
    res.render('404' , {
        errMsg : 'Oops Page Not Found'
    })
})
app.listen(2000, ()=>
{
    console.log('listening on port 2000')
})
