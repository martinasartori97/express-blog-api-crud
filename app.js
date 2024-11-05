//require ('dotenv').confing()

const express = require('express')
const app = express()



const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.json());


app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:3000`)
});



app.get('/', (req, res) => {
    res.send('posts rest API')
});


const PostsController = require('./controllers/PostsController');

app.get('/posts', PostsController.index);
app.get('/posts/:id', PostsController.show);



