const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../../utils/auth');

// Getting all Posts for dashboard page
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['comment', 'created', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username'],
                }
            },
        ],
    })
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
    })
});

module.exports = router;