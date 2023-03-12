const { Router } = require('express');
const { requireAuth,restrict_student} = require('../middleware/authMiddleware');
const studentController=require('../controllers/studentController');

const router=Router();

router.get('/books',requireAuth,restrict_student,studentController.student_books_get);

router.post('/request',requireAuth,restrict_student,studentController.student_post_request);

router.post('/return',requireAuth,restrict_student,studentController.student_post_return);

module.exports=router;
