// Seed data for Users
const { User } = require('../models');

const userData = [
  {
    username: 'codefrenzy',
    password: '$2b$10$eRwrOgihbKdkGw0FitiHaOdpxQZvUP5YsyYAeWtVqLhW7mOgZKIay',
  },
  {
    username: 'livesecure',
    password: '$2b$10$eRwrOgihbKdkGw0FitiHaOdpxQZvUP5YsyYAeWtVqLhW7mOgZKIay',
  },
  {
    username: 'simplify',
    password: '$2b$10$eRwrOgihbKdkGw0FitiHaOdpxQZvUP5YsyYAeWtVqLhW7mOgZKIay',
  },
  {
    username: 'hideinplainsight',
    password: '$2b$10$eRwrOgihbKdkGw0FitiHaOdpxQZvUP5YsyYAeWtVqLhW7mOgZKIay',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;