const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Getting all Posts for home page
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['comment', 'created'],
            },
        ],
    }).catch((err) => {res.json(err)});

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
    }).catch ((err) => {res.json(err)});
});

module.exports = router;