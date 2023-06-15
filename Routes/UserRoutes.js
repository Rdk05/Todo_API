const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController')

router.get('/', UserController.getForm);

router.post('/Add', UserController.Add);
router.get('/get-all-Titles' , UserController.getAllTitles);
router.post('/update-todo-Description' , UserController.updatetodoDescription);
router.post('/delete-todo', UserController.deletetodo);


module.exports = router;