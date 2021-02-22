

const {NOT_FOUND_EMAIL, SUCCEFULL, INCORRECT_PASSWORD } = require('../constants/response')
const authService = () => {
    
    const validateEmail = (req,res) => {

        let user = users.find(element => String.trim(element.email) == req.body.email );
    
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