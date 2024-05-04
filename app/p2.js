const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const url = req.url
    let homePage = fs.readFileSync('../asset/index.html')
    let aboutPage = fs.readFileSync('../asset/about.html')
    let contactPage = fs.readFileSync('../asset/contact.html')
    let pnfPage = fs.readFileSync('../asset/pnf.html')

    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    } else if(url === '/contact') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(contactPage)
        res.end()
    } else{
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(pnfPage)
        res.end()
    }
})

server.listen(3400, () => {
    console.log(`server is running @ http://localhost:3400`)
})