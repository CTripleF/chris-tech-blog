const { Post } = require('../models');

const postData = [
  {
    title: "The rule of two",
    content:
      "there must always be two sith., a master and an apprentice. One to hold power and the other to seek nad crave it",
    user_id: 1
  },
  {
    title: "not once but twice",
    content:
      "They trained me. They wiped my memories after I betrayed them and was betrayed... they tained me again... the fools",
    user_id: 2
  },
  {
    title: "A prophecy",
    content:
      "there will be a sith that will destroy the sith and from the ashes rebuild and make them stronger ",
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;