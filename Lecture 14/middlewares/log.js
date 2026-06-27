const log = (req,res, next) => {
     console.log("Global Middleware");
     next();
}
module.exports = log.js