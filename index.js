// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>
// {
//     res.send('hello from express sumair')
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

// const express = require('express')
// const app = express()

// const aboutPage = (req,res) => {
//     res.send('Hello i am call back about page')
// }
// app.get('/', (req, res) => {
//     res.send('hello from express sumair')
// })
// app.get('/contact', (req, res) => {
//     res.send('Contact Page')
// })
// app.get('/about', aboutPage)


// app.listen(2000, () => {
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

// const express = require('express')
// const app = express()
// const path = require('path')
// const port = process.env.PORT || '4000'
// app.set('view engine' ,'hbs')

// const staticDynamic = path.join(__dirname,'staticweb')
// app.use(express.static(staticDynamic))

// app.get('/',(req,res)=>
// {
//     res.render('index') 
// })
// app.get('/about' , (req , res)=>
// {
//     res.render('about')
// })
// app.get('*' , (req , res)=>
// {
//     res.render('404' , {
//         errMsg : 'Oops Page Not Found'
//     })
// })
// app.listen(port, ()=>
// {
//     console.log(`Server listening at port ${port}`)
// })

//Practice-2
//Routing
// const express = require('express')
// const app = express()
// const port = process.env.PORT || '5000'

// app.get('/',(req,res)=>
// {
//     res.send('hello World!!!')
// })
// app.all('/all' , (req,res)=>
// {
//     res.send('All Method')
// })
// app.all('/api/*' , (req,res)=>
// {
//     res.send('Api page')
// })
// app.all('*' , (req,res)=>
// {
//     res.send('Page Not Found')
// })

//Path
//string pattern path , only run in abcd and acd

// const express = require('express')
// const app = express()
// const port = process.env.PORT || '5000'

// app.get('/ab?cd' , (req , res) =>
// {
//     res.send('hello practice')
// })
// app.listen(port , () =>
// {
//     console.log(`Server listening at port ${port}`)
// })

//RE
// const express = require('express')
// const app = express()
// const port = process.env.PORT || '5000'

// app.get(/s/, (req , res) =>
// {
//     res.send('( s ) found')
// })

//callbacks
// const express = require('express')
// const app = express()
// const port = process.env.PORT || '5000'

//more than one call back

// app.get('/cbexample', (req, res, next) => {
//     console.log('first callback')
//     next()
// }
//     , (req, res) => {
//         console.log('Second callback')
//         res.send('more than one callback')
//     })

//Array of callback
// const cb1 = (req,res,next)=>
// {
//     console.log('first callback')
//     next()
// }
// const cb2 = (req,res,next)=>
// {
//     console.log('second callback')
//     next()
// }
// const cb3 = (req,res)=>
// {
//     console.log('third callback')
//     res.send('Array Of Callbacks')
// }
// app.get('/array' , [cb1,cb2,cb3])

//chained route //Path same method change only
// const express = require('express')
// const app = express()
// const port = process.env.PORT || '5000'
// app.route('/student')
//     .get((req, res) => {
//         res.send('Get Student')
//     })
//     .post((req, res) => {
//         res.send('Add Student')
//     })
//     .put((req, res) => {
//         res.send('Update Student')
//     })

//validation

// app.route('/student')
//     .all((req, res,next) => {
//         console.log('first')
//         res.send('All method')
//         next()
//     })
//     .get((req, res) => {
//         console.log('get method')
//         res.send('All student')
//     })

//     .post((req, res) => {
//         console.log('Post method')
//         res.send('Add Student')
//     })
//     .put((req, res) => {
//         console.log('Put method')
//         res.send('Update student')
//     })

//Router
// const stu = require('./router/student')

// app.use('/student',stu)

//Route parameter /dynamic route

// const express = require('express')
// const app = express()
// const port = process.env.PORT || '5000'

// app.get('/student/delete/:dept/:id',(req,res)=>  //:id likho gay to dynamic hojay ga
// {
//     console.log(req.params)
//     res.send(`Student Deleted Sid is :  ${req.params.id}`)
// })

// app.get('/product/:category/:id',(req,res)=>  
// {
//     console.log(req.params)
//     res.send(`Product`)
// })
    
// app.get('/train/:from-:to',(req,res)=>  //:id likho gay to dynamic hojay ga
// {
//     console.log(req.params)
//     res.send(`Train : From ${req.params.from} to ${req.params.to}`)
// })

//Restriction in path

// app.get('/student/delete/:id([0-9]{2})',(req,res)=> 
// {
//     console.log(req.params)
//     res.send(`Student Deleted Sid is :  ${req.params.id}`)
// })

// jo path me dun ga wo chaly ga 
// app.get('/:type(employee|worker)/:id([0-9]{2})',(req,res)=> 
// {
//     console.log(req.params)
//     res.send(`Employee | Worker :  ${req.params.id}`)
// })

//query string
// app.get('/product' , (req,res)=>
// {
//     console.log(req.query)
//     res.send('Response')
// })

//important code 
//Controller / file k andr controller banaya hy / use hbs to get html file
const express = require('express')
const app = express()
const port = process.env.PORT || '5000'
const route = require('./router/student')

//set template engine
app.set('view engine','hbs')// hbs example

//load routes
app.use('/',route) //simple controller example

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})


