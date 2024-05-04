const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('../asset'))

app.get(`/`, (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get(`/about`, (req,res) => {
    res.sendFile(path.resolve(__dirname, '../asset/about.html'))
})

app.get(`/contact`, (req,res) => {
    res.sendFile(path.resolve(__dirname, '../asset/contact.html'))
})

app.get(`*`, (req,res) => {
    res.sendFile(path.resolve(__dirname, '../asset/pnf.html'))
})

app.all(`*`, (req,res) => {
    res.status(404).send('<h1>Requested path not found</h1>')
})

app.listen(3700, () => {
    console.log(`server is running @ http://localhost:3700`)
})