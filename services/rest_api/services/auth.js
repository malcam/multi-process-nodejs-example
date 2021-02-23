

const {NOT_FOUND_EMAIL, SUCCEFULL, INCORRECT_PASSWORD } = require('../constants/response');
const users = require('../../../providers/mock/users');

const authService = () => {
    
    const validateEmail =  (ctx, next) => {

        let user =  users.find(element => String(element.email).trim() ==  ctx.request.body.email );
    
        if(!user){
            return res.json(NOT_FOUND_EMAIL);
        }
        return res.json(SUCCEFULL)
    
    }

    const login = (req,res) => {

    }

    const recoveryPassword = (req,res) => {

    }

    return {
        validateEmail,
        login,
        recoveryPassword
    }
}

module.exports = authService;