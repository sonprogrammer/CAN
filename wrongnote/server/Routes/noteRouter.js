const express = require('express')
const noteRouter = express.Router()
const noteController = require('../Controller/noteController')

noteRouter.get('/:userId', noteController.getNote)
noteRouter.post('/write/:userId', noteController.postNote)
noteRouter.put('/edit/:userId', noteController.updateNote)



module.exports = noteRouter;