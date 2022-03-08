
const getUserDB = require('../utils/conection');

function getUser(req, res){
        try{
            res.status(200).json(getUserDB);
        }catch (error){
            console.log(error)
        }
        
}

module.exports = getUser;

