const mongoose = require("mongoose");

const FacebookPostSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    timePosted: {
      type: Number,
      required: true,
    },
    datePosted: {
      type: Date,
      required: true,
    },
    postHeading: {
      type: String,
    },
    postImageUrl: {
      type: String,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    shareCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const FacebookPost = mongoose.model("FacebookPost", FacebookPostSchema);
module.exports = FacebookPost;
