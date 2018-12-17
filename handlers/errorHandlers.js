/**
 * Catch Errors Handler
 * Instead of using try{} catch(e) {} in each controller, we wrap the function in
 * catchErrors(), catch any errors they throw, and pass it along to our express middleware with next().
 */

module.exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch((e) => {
      if (e.res) {
        e.status = e.res.status
      }
      next(e)
    })
  }
}
