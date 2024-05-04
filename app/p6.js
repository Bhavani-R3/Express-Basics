const express = require('express')
const products = require('./product')

const app = express()

app.get(`/`, (req,res) => {
    res.status(200).json({ msg: "welcome to api, to get users try on path /api/products"})
})

// all products data
app.get(`/api/products`, (req,res) => {
    res.status(201).json({ length: products.length, products })
})

// single products data -> by sending ref -> router params
app.get(`/api/products/single/:productId`, (req,res) => {
    let id = req.params.productId
    let single = products.find(item => item.id == id)
    if(!single)
    return res.status(404).json({ msg: 'requested id not found'})
    res.json({ data: req.params, single })
})

// single products data -> by sending ref router query ?query1=value1&query2=value2
app.get(`/api/products/single`, (req,res) => {
    let id = req.query.products
    let single = products.find(item => item.id == id)
    if(!single)
    return res.status(404).json({ msg: 'requested id not found'})
    res.json({ data: req.query, single })
})

app.listen(3450,() => {
    console.log(`server is running @ http://localhost:3450`)
})