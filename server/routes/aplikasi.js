const ApplicationController = require('../controllers/ApplicationController')

const router = require('express').Router()

router.get('/', ApplicationController.findAll)
router.get('/:id', ApplicationController.findOne)
router.post('/', ApplicationController.insert)
router.put('/:id', ApplicationController.update)
router.delete('/:id', ApplicationController.delete)
router.get('/', ApplicationController.findByFounder)

module.exports = router
