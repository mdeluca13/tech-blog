// Seed data for Comments
const { Comment } = require('../models');

const commentData = [
  {
    comment: 'I love keeping things secure.',
    created: 'September 26, 2022',
    user_id: 1,
    post_id: 2,
  },
  {
    comment: 'So true!',
    created: 'March 15, 2023',
    user_id: 2,
    post_id: 1,
  },
  {
    comment: 'I agree.',
    created: 'March 23, 2023',
    user_id: 3,
    post_id: 4,
  },
  {
    comment: 'Love simplicity',
    created: 'May 1, 2023',
    user_id: 4,
    post_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;