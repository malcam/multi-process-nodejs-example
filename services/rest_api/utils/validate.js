module.exports= (schema) => {
    console.log("aaad")
    return  function (req,res, next)  {
        const { error, value } = schema.validate(req.body);
        if (error) {
            res.json({
                code:400,
                message: 'Invalid Params',
                error: error.message
            })
            return;
        }
        console.log("ad")
        next();
    }

    
}