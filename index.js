const express = require('express')
const app = express()
const port = 3002;
app.use(cors());
const logger = require('./middleware/logger404')

app.use(express.json())

app.use('/api', require('./routes'))

app.use(logger)

app.use((req, res)=>{
    res.status(404).json({error: "Not found"})
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
