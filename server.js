import express from 'express'

const app = express();
app.get("/",(req,res) =>{
    res.send("welcome here")
})

app.listen(5000, () => {
    console.log("first");
})