const express = require('express')
const app=express()

app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('hola mundo')

})

app.listen(4500,()=>{
    console.log('el servidor se esta ejecutando')
})