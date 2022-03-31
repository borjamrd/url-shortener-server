
const {MongoClient} = require('mongodb');


//Get user data by id

const getUser = async function () {

    const provId = "6245b98305e4db11d9971679"

    const uri = 'mongodb+srv://borja:1234@cluster0.3lq29.mongodb.net/users?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    await client.connect()
    const result = await client.db('users').collection('user_data').findOne({_id:provId});
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


//Post a new User


const postUser = async function () {

  
        const datausertest = [
            {
                "_id": {
                    "$oid": "6245c4761700c80406c53154"
                },
                "personal_info": {
                    "firstname": "Nombre 2",
                    "lastname": "Muñoz",
                    "username": "borjamrd",
                    "email": "correo2@gmail.com",
                    "password": "prueba"
                },
                "url_original": "",
                "new_url_data": {
                    "utm_source": "",
                    "utm_medium": "",
                    "utm_campign": ""
                },
                "new_url": ""
            }
        ]
        const uri = 'mongodb+srv://borja:1234@cluster0.3lq29.mongodb.net/users?retryWrites=true&w=majority';
        const client = new MongoClient(uri);
        await client.connect()
        const result = await client.db('users').collection('user_data').insertOne({datausertest});
    
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
    

