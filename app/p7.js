// middleware
const express = require('express')
const PORT = 4233
const timer = require('./time')

const app = express()

app.get(`/`, timer, (req,res) => {
    let time = req.myTime
    let date = req.myDate
    res.status(200).json({ msg: `home path = ${date} ${time}`})
})

app.get(`/about`, timer, (req,res) => {
    res.status(200).json({ msg: `about path ${req.myDate} ${req.myTime}`})
})

app.all('*', (req,res) => {
    res.status(404).json({ msg: `Requested path not found`})
})

app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})
