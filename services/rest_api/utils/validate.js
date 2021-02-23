module.exports= (schema) => {

    return (ctx, next) => {

        const { error, value } = schema.validate( ctx.request.body);
        if (error) {
            return res.json({
                code:400,
                message: 'Invalid Params',
                error: error.message
            })

        }

        next();
    }

    
}