
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


const store = (req, res) => {

  // create the new post object
  const post = {
    title: req.body.title,
    slug: req.body.slug,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  };

  posts.push(post)


  return res.status(201).json({
    status: 201,
    data: posts,
    count: posts.length
  })





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