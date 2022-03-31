
const postUserDB = require('../../managers/userManager')

async function postUser(req, res){
    const result = await postUserDB()
    console.log(result, "post newuser")
    res.status(201).json(result);

}

module.exports = postUser;