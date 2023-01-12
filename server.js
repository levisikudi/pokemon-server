const express = require('express')

const app = express()

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.send("Code is working")
})




app.listen(4000, () => {
    console.log(`Server is Listening on 4000...`)
})