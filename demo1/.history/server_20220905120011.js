 const express = require('express')
 const app = express()

 app.use(express.static(path.join(__dirname, 'static')));
app.get('/person',(req,res)=>{
    res.send({
        name:'sb',
        age:18
    })
})

 app.listen(5000,(err)=>{
    if (!err) console.log('服务器启动成功')
 })