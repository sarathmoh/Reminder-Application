const express=require('express')
const app=express()
const cross=require('cors')
const service=require('./service')

app.use(cross({
    origin:'http://localhost:4200'
}))


app.use(express.json())
   

// register api call




app.post('/register',(req,res)=>{
const result=service.register(req.body.username,req.body.password,req.body.mobile)
.then(result=>{ res.status(result.statusCode).json(result)
})
})
app.listen(3000,()=>{
console.log("reminder server start at 3000");
})














