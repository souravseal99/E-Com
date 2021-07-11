const errorHandler = (err, req, res, next) => {
    const status_code = res.statusCode === 200 ? 500 : res.statusCode
    res.status(status_code)
    res.json(process.env.NODE_ENV === "production" ? null : { message: err.message, stack: err.stack })
    next()
}

const fallback_notfound = (req, res, next) => {
    const error = new Error(`the URL ${req.originalUrl} not found...`)
    res.status(404)
    next(error)
}
export { errorHandler, fallback_notfound }