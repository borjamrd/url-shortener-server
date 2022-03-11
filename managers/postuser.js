
const {MongoClient} = require('mongodb');



const postUser = async function () {

  
        const datausertest = [
            {username:" Felipe",
             password: "q231"}
        ]
      
    
        const uri = 'mongodb+srv://borja:1234@cluster0.3lq29.mongodb.net/user?retryWrites=true&w=majority';
        const client = new MongoClient(uri);
        await client.connect()
        const result = await client.db('user').collection('personaldata').insertOne({datausertest});
    
        if (result){
            console.log('Added')
            console.log(result)
            return result
            
        }
         else {
            console.log('User not found')
        }
        
    }
module.exports = postUser
    
