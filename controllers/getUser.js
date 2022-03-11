
const getUserDB = require('../managers/getuser');

async function getUser(req, res){
    const result = await getUserDB()
    await res.status(200).json(result);
    console.log(result, "test getuser")
}

module.exports = getUser;

