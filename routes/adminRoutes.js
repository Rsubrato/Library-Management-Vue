const { Router } = require('express');
const { requireAuth,restrict_admin } = require('../middleware/authMiddleware');
const adminController=require('../controllers/adminController');
const User=require('../models/user');

const router=Router();

router.get('/users',requireAuth,restrict_admin,adminController.users_get);
// router.post('/create',requireAuth,adminController.restrict_admin,adminController.users_post);
router.post('/create',requireAuth,restrict_admin,adminController.users_post);
// router.get('/create',requireAuth,restrict_admin,adminController.user_add);
// router.get('/add',requireAuth,restrict_admin,adminController.books_create);

// router.post('/add',requireAuth,adminController.restrict_admin,adminController.books_post);
router.post('/add',requireAuth,restrict_admin,adminController.books_post);
// router.get('/users/id',(req,res)=>{
// console.log(req);
// });
router.get('/books',requireAuth,restrict_admin,adminController.books_get);
// router.get('/books/:id',requireAuth,adminController.restrict_admin,adminController.book_get_id);
// router.get('/books/delete/:id',requireAuth,adminController.restrict_admin,adminController.book_delete_id);
router.delete('/books/delete',requireAuth,restrict_admin,adminController.book_delete_id);
router.delete('/users/delete',requireAuth,restrict_admin,adminController.user_delete_id);

// router.get('/users/delete/:id',requireAuth,adminController.restrict_admin,adminController.user_delete_id);


// router.post('/users/update/:id',requireAuth,adminController.restrict_admin, adminController.user_update);
// router.get('/users/update/:id',requireAuth,adminController.restrict_admin,adminController.view_updated_users);
router.get('/users/update',requireAuth,restrict_admin,adminController.view_updated_users);

router.post('/users/update',requireAuth,restrict_admin,adminController.user_update);
router.get('/books/update',requireAuth,restrict_admin,adminController.view_updated_books);

// router.get('/books/update/:id',requireAuth,adminController.restrict_admin,adminController.view_updated_books);
router.post('/books/update',requireAuth,restrict_admin, adminController.book_update);

module.exports=router;

