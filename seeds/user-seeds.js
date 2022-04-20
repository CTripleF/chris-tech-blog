const { User } = require("../models");

//seed users
const userData = [
  {
    username: "darthbane",
    email: "darthbane@ruleof2.com",
    password: "ruleof2",
  },

  {
    username: "darthrevan",
    email: "darthrevan@oldrepublic.com",
    password: "thoughtbombsftw",
  },

  {
    username: "sithari",
    email: "sithari@prochecy.com",
    password: "alsobane"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
