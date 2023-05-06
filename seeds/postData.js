// Seed data for Posts
const { Post } = require('../models');

const postData = [
  {
    title: 'MVC',
    content: 'Helps keeps everything organized',
    user_id: 1,
    created: 'September 22, 2022',
    comment_id: 1,
  },
  {
    title: 'Dont forget to hash your passwords!',
    content: 'Keep things secure with BCRYPT',
    user_id: 2,
    created: 'February 15, 2023',
    comment_id: 2,
  },
  {
    title: 'MYSQL',
    content: 'Commands are straight forward',
    user_id: 3,
    created: 'March 1, 2023',
    comment_id: 3,
  },
  {
    title: 'Hide your login with dotenv',
    content: 'No one can find your info with .env files',
    user_id: 4,
    created: 'April 27, 2023',
    comment_id: 4,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;