// Seed data for Users
const { User } = require('../models');

const userData = [
  {
    username: 'codefrenzy',
    password: 'password',
  },
  {
    username: 'livesecure',
    password: 'password',
  },
  {
    username: 'simplify',
    password: 'password',
  },
  {
    username: 'hideinplainsight',
    password: 'password',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;