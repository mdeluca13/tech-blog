// Calling all seeding functions
const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComment();

  await seedPost();

  await seedUser();

  process.exit(0);
};

seedAll();
