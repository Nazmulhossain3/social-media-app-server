const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
const port = 3000



app.use(express.json());
app.use(cors())


const postRoute = require('./src/Post/post.route') 


// Connect to the database using mongoose
mongoose.connect('mongodb://social-media:LuaD6XcvDQRsMklE@ac-onjpk5k-shard-00-00.xskcn3u.mongodb.net:27017,ac-onjpk5k-shard-00-01.xskcn3u.mongodb.net:27017,ac-onjpk5k-shard-00-02.xskcn3u.mongodb.net/SocialMedia?ssl=true&replicaSet=atlas-g07jbs-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection is successful"))
    .catch(err => console.error("Connection failed:", err));



app.use('/post-route', postRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})