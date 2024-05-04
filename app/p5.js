const express = require('express')
const users = require('./data')

const app = express()

app.get(`/`, (req,res) => {
    res.status(200).json({ msg: "welcome to api, to get users try on path /api/users"})
})

// all users data
app.get(`/api/users`, (req,res) => {
    res.status(201).json({ length: users.length, users })
})

// single user data -> by sending ref -> router params
app.get(`/api/users/single/:userId`, (req,res) => {
    let id = req.params.userId
    let single = users.find(item => item.id == id)
    if(!single)
    return res.status(404).json({ msg: 'requested id not found'})
    res.json({ data: req.params, single })
})

// single user data -> by sending ref router query ?query1=value1&query2=value2
app.get(`/api/users/single`, (req,res) => {
    let id = req.query.user
    let single = users.find(item => item.id == id)
    if(!single)
    return res.status(404).json({ msg: 'requested id not found'})
    res.json({ data: req.query, single })
})

app.listen(3459,() => {
    console.log(`server is running @ http://localhost:3459`)
})