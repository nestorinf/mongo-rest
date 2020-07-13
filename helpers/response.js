"use strict"

exports.success = (req,res,data) =>{
    const statusCode = 200
    const parseData  = JSON.stringify(data, null, 4)

    res.status(statusCode).send({
         error:false
        ,message:req.message
        ,data:JSON.parse(parseData)
    })
}

exports.error = (req,res,err) => {
    const message = err.message || ''
    const statusCode = 404 || err.statusCode
    res.status(statusCode).send({
         error:true
        ,message
    })
}

exports.responseData = (response) => {
    const { n, ok  } = response.result
    const { ops }    = response
    return {
        n,
        ok,
        ops
    }
}