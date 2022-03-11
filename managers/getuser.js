
const {MongoClient} = require('mongodb');

const getUser = async function () {

    const uri = 'mongodb+srv://borja:1234@cluster0.3lq29.mongodb.net/user?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    await client.connect()
    const result = await client.db('user').collection('personaldata').findOne({username: "borjamrd"});

    if (result){
        console.log('Finded')
        console.log(result)
        return result
        
    }
     else {
        console.log('User not found')
    }
    
}
module.exports = getUser
