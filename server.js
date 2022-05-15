const express = require('express');
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const urlRoutes = require('./routes/urlRoutes')
const connectDB = require('./config/db')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')


dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/urls', urlRoutes )
app.get('/test', (req, res) => {
    res.send('Hello World!')
  })
app.use(errorHandler);
app.use(notFound);

const PORT =  process.env.PORT || 8001

app.listen(PORT, console.log(`Server started on port ${PORT}`))