const express = require('express')

const router = express.Router()
const PostsController = require('../controllers/PostsController.js')

router.get('/', PostsController.index)
router.get('/:id', PostsController.show)
router.post('/', PostsController.store)
router.put("/:id", PizzaController.update)




module.exports = router