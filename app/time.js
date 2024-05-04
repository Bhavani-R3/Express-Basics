const timer = (req,res,next) => {
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    // res.json({ time })
    // req variables
    req.myTime = time
    req.myDate = date
    next() // it transfer the repon
}

module.exports = timer