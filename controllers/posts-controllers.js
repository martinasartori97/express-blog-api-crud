
const posts = require('../db.js')

const index = (req, res) => {
    res.json({ data: posts, count: posts.length })
  }

  module.exports = {
    index
  }



const show = (req, res) => {

    const posts = posts.find((posts) => posts.id === parseInt(req.params.id))
    if (!posts) {
      return res.status(404).json({ error: "No posts found with that id" })
    }
    return res.status(200).json({ data: posts })
  }


  const store = (req,res) =>{
    console.log(req.body);
    res.json = ({
      body: req.body
    })
    

  }

  module.exports = {
    index,
    show,
    store
  }