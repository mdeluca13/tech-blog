const router = require('express').Router();
const { Post, User, Comment } = require('../models');

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
    res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
    })
});

// getting posts by id for dashboard
router.get('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/user/login');
    } else {
        try {
            const postData = await Post.findByPk(req.params.id, {
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
            });
            console.log(postData)
            const post = postData.get({ plain: true });
            console.log(post);
            res.render('updatepost', { post, loggedIn: req.session.loggedIn });
        
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        };
    };
});

module.exports = router;