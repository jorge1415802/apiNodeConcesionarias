const { Router } = require('express');
const { getCategories, createCategory, deleteCategory, updateCategory } = require('../controller/category');

const router = Router();

router.get('/',getCategories);
router.post('/create',createCategory);
router.delete('/delete/:id',deleteCategory);
router.patch('/update/:id',updateCategory);

module.exports = router;