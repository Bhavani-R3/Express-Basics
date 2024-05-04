/* routes basic node http module */
const http = require('http')

// req => receiving incoming data
// res => sending reponse outside the server
const server = http.createServer(function(req,res){
    // req.url -> url path
    // req.body -> form data
    // req.query -> string queries
    // req.params -> router params
    // req.file -> file content
    const url = req.url
    // home - /
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>Home page content</h1>`)
        res.end()
    }
    // about - /about
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>About page content</h1>`)
        res.end()
    }
    // contact - /contact
    else if(url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>Contact page content</h1>`)
        res.end()
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`<h1>Path Not Found</h1>`)
        res.end()
    }
})
server.listen(4240, () => {
    console.log(`server is running @ http://localhost:4240`)
})



/* to install express js 
   npm init -y
   npm i --save express 
*/

/* cmd to install nodemon to run express 
   npm i -g nodemon 
*/