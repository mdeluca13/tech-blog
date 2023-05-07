const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// const helpers = require('../utils/helpers');

// Getting all comment data
router.get('/', async (req, res) => {
    const commentData = await Comment.findAll({
        where: {
            user_id: req.session.user_id,
        },
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Post,
                attributes: ['post_id'],
            },
        ],
    }).catch((err) => {res.json(err)});
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
    })
});

// Get individual post
router.get('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/user/login');
    } else {
        try {
            const commentData = await Comment.findByPk(req.params.id, {
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                    {
                        model: Post,
                        attributes: ['post_id'],
                    },
                ],
            });
            // const post = postData.get({ plain: true });
            // res.render('post', { post, loggedIn: req.session.loggedIn });
            res.status(200).json(commentData)
        
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        };
    };
});

// Add Comment
router.post('/', async (req, res) => {
    try { 
        const commentData = await Comment.create({
        comment: req.body.comment,
        user_id: req.session.user_id,
        // user_id: req.body.user_id,
        post_id: req.body.post_id,
        })
        console.log('commentData' + commentData) 
        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update comment
router.put('/:id', (req, res) => {
    Comment.update(
      {
        comment: req.body.comment,
        created: req.body.created,
      },
      {
        where: {
          comment_id: req.params.id,
        },
      }
    )
    .then((updatedComment) => {res.json('Comment Updated')}).catch((err) => res.json(err));});

// Delete comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            comment_id: req.params.id,
        },
    })
    .then((deletedComment) => {res.json('Comment Deleted')}).catch((err) => res.json(err));});

module.exports = router;