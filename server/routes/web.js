const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const projectsController = require('../controllers/projectsController');
const blogController = require('../controllers/blogController');

/* ==============================================
pages
=============================================== */
router.get('/', pagesController.homePage);
router.get('/about', pagesController.about);

/* ==============================================
projects //now we have REST api set up, we can even conenct this app through phone
=============================================== */
router.get('/projects',  projectsController.index);
router.get('/projects/create',  projectsController.create);
router.post('/projects',  projectsController.store);
router.get('/projects/:title',  projectsController.show);
router.get('/projects/:title/edit',  projectsController.edit);
router.put('/projects/:title',  projectsController.update);
router.delete('/projects/:title',  projectsController.destroy);

/* ==============================================
blog
=============================================== */
router.get('/blog',  blogController.index);
router.get('/blog/create',  blogController.create);
router.get('/blog/:title',  blogController.show);
router.post('/blog',  blogController.store);

/* ==============================================
contact
=============================================== */
router.get('/contact', pagesController.contact);
module.exports = router;
