var express = require('express')
var app = express()
var router = express.Router()

function listening(){
    console.log('listening...')
}

app.get('/', function(req, res){
    res.sendFile("C:\Users\ronni\Documents\Rea_file\Computing_JC\Js_test\stem\index.html")
})

app.use('/', router)
app.listen(process.env.port || 3000)
console.log('Running at Port 3000')

