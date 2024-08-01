const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("<h1>Hello from Server</h1>")
})

app.listen('3002',()=>{
    console.log("server is running");
})