const express = require('express')

const router = express.Router()
const PostsController = require('../controllers/Posts-controllers.js')

router.get('/', PostsController.index)
router.get('/:title', PostsController.show)
router.post('/', PostsController.store)
router.put("/:title", PostsController.update)
router.delete("/:title", PostsController.destroy)




module.exports = router