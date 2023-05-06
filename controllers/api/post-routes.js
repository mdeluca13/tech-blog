const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Getting all Post data
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
    // const posts = postData.map((post) => post.get({ plain: true }));

    // res.render('main', {
    //     posts,
    //     loggedIn: req.session.loggedIn,
    // })
    // // .catch ((err) => {res.json(err)});
});

// Add Post
router.post('/', async (req, res) => {
    try { 
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            created: req.body.created,
            user_id: req.body.user_id,
        });
        res.status(200).json(postData)
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get individual post
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
            // const post = postData.get({ plain: true });
            // res.render('post', { post, loggedIn: req.session.loggedIn });
            res.status(200).json(postData)
        
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        };
    };
});

// Update post
router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title,
        content: req.body.author,
        created: req.body.created,
      },
      {
        where: {
          post_id: req.params.id,
        },
      }
    )
    .then((updatedPost) => {res.json('Post Updated')}).catch((err) => res.json(err));});

// Delete post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            post_id: req.params.id,
        },
    })
    .then((deletedPost) => {res.json('Post Deleted')}).catch((err) => res.json(err));});

module.exports = router;