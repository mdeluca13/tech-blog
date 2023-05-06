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
                attributes: ['comment', 'created', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username'],
                }
            },
        ],
    }).catch((err) => {res.json(err)});
    res.status(200).json(postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('homepage', {
         posts,
        loggedIn: req.session.loggedIn,
    })
    .catch ((err) => {res.json(err)});
});

module.exports = router;