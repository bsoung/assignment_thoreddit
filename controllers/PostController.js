const { Post } = require("../models");

module.exports = {
  getAll: () => {
    return Post.find({}, {}, { sort: { createdAt: -1 } }).populate("user");
  }
};
