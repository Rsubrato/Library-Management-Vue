const { Router } = require('express');
const { requireAuth,restrict_lecturer } = require('../middleware/authMiddleware');
const lecturerController=require('../controllers/lecturerController');

const router=Router();

// router.get('/books',requireAuth,lecturerController.restrict_lecturer,lecturerController.lecturer_books_get);
router.get('/approve',requireAuth,restrict_lecturer,lecturerController.approve_get);
router.post('/approve',requireAuth,restrict_lecturer,lecturerController.approve_post);
// router.post('/approve/:uid/:bid',lecturerController.approve_post);

// router.post('/approve/:uid/:bid',requireAuth,lecturerController.restrict_lecturer,lecturerController.approve_post);
// router.post('/reject/:id',requireAuth,lecturerController.restrict_lecturer,lecturerController.reject_post);
router.post('/reject',requireAuth,restrict_lecturer,lecturerController.reject_post);

module.exports=router;

