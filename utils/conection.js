const {MongoClient} = require('mongodb');
 

async function ConnectDatabase(){
    const uri = 'mongodb+srv://borja:1234@cluster0.3lq29.mongodb.net/user?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    try {
        await client.connect()
        /* await listDatabases(client) */
        /* await AddNewUser(client, newUser) */
        await getUser(client)
    } catch (error) {
        console.log(error)        
    } finally{
        await client.close()
    }
}

ConnectDatabase().catch(console.error)


//------------Debería añadirlo en otro archivo/carpeta? -----//

/* 
async function listDatabases(client){
    const databasesList = await client.db("borja").admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db=> console.log(`-${db.name}`))
} */

/* const newUser = [
    {name: "Federico",
    password: "4321"}
]
 */
/* async function AddNewUser(client, newUser){
    const result =  await client.db('user').collection('personaldata').insertMany(newUser)
}  */
async function getUser() {

    const uri = 'mongodb+srv://borja:1234@cluster0.3lq29.mongodb.net/user?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    await client.connect()
    const result = await client.db('user').collection('personaldata').findOne({name: "Federico"});

    if (result){
        console.log('Finded')
        console.log(result)
    } else {
        console.log('User not found')
    }

    return result
    
}



module.exports = getUser





 