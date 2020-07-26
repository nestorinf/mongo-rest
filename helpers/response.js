'use strict'

exports.success = (req, res, data) => {
  const statusCode = 200
  const parseData = data

  res.status(statusCode).json({
    error: false,
    message: req.message,
    data: parseData
  })
}

exports.error = (req, res, err) => {
  const message = err.message || ''
  const statusCode = 404 || err.statusCode
  res.status(statusCode).send({
    error: true,
    message
  })
}

exports.responseData = (response) => {
  const { n, ok } = response.result
  const { ops } = response
  return {
    ops,
    n,
    ok
  }
}
