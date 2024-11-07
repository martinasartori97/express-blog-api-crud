//require ('dotenv').confing()

const express = require('express')
const PostsController = require('./controllers/posts-controllers');
const app = express()
const myRoutes = require('./routes/posts.js');



const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.json());


app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:3000`)
});



app.get('/', (req, res) => {
    res.send('posts rest API')
});

app.use('/', posts.js);





app.get('/posts', PostsController.index);
app.get('/posts/:title', PostsController.show);
app.post('/posts', PostsController.store);





