const express = require('express')

// instance
const app = express()

app.get(`/`, (req,res) => {
    res.status(200).send('<h1>Welcome to home</h1>')
})
app.get(`/about`, (req,res) => {
    res.status(200).send('<h1>Welcome to about</h1>')
})
app.get(`/contact`, (req,res) => {
    res.status(200).send('<h1>Welcome to contact</h1>')
})
app.all(`*`, (req,res) => {
    res.status(404).send('<h1>Requested path not found</h1>')
})

app.listen(3600, () => {
    console.log(`server is running @ http://localhost:3600`)
})


// http request methods
// app.get()
// app.post()
// app.patch()
// app.put()
// app.delete()

// config modules, settings and middleware
// app.use()
// app.set()

// app.all() -> to handle default route

// app.listen() -> to listen port numbers