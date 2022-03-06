const getUserDB = require('../utils/conection');

function getUser(req, res){
    res.status(200).json(getUserDB());
    
}

module.exports = getUser;

