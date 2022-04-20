const { User } = require("../models");

//seed users
const userData = [
  {
    username: "darthbane",
    password: "ruleof2",
  },

  {
    username: "darthrevan",
    password: "thoughtbombsftw",
  },

  {
    username: "sithari",
    password: "alsobane"
  }
];

const seedUsers = () => User.bulkCreate(userData);
