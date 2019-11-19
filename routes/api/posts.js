const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// @router  GET api/posts
// @desc    Get all posts
// @access  Private

router.get('/', Auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.send(posts);
  } catch (err) {
    console.log(err.message);
    res.send(500).send('Server Error');
  }
});
// @router  GET api/posts/:id
// @desc    Get Post By Id
// @access  Private

router.get('/:postId', Auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(400).send('No Such Post');
    }
    res.send(post);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).send('Profile not found');
    }
    res.send(500).send('Server Error');
  }
});

// @router  POST api/posts
// @desc    Create a new Post
// @access  Pivate

router.post(
  '/',
  [
    Auth,
    [
      check('title', 'title is Required')
        .not()
        .isEmpty(),
      check('body', 'body skills is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const { title, body } = req.body;
      const newPost = {
        title,
        body,
        user: user.id,
        avatar: user.avatar,
        name: user.name
      };

      const post = new Post(newPost);
      await post.save();
      res.send(post);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @router  DELETE api/posts/:post_id
// @desc    DELETE post bu id
// @access  Private
router.delete('/:post_id', Auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(400).send('Post Not Found');
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).send('No Credentials');
    }

    await post.remove();
    res.send('Post Removed');
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).send('Post not found');
    }
    res.status(500).send('Server Error');
  }
});

// @router  PUT api/posts/like/:post_id
// @desc    Like a post
// @access  Private

router.put('/like/:post_id', Auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // if (!post) return res.status(400).send('No Post Found');

    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Already Liked' });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).send('No Post Found');
    }
    res.status(500).send('Server Error');
  }
});

// @router  PUT api/posts/unlike/:post_id
// @desc    Unlike a post
// @access  Private

router.put('/unlike/:post_id', Auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    const delindex = post.likes.map(like => like.user).indexOf(req.user.id);
    console.log(delindex);
    if (delindex == -1) {
      return res.send('Not Liked');
    }

    post.likes.splice(delindex, 1);
    await post.save();
    res.send(post.likes);
  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).send('No Post Found');
    }
    res.status(500).send('Server Error');
  }
});

// @router  POST api/posts/comment/:post_id
// @desc    Add comment to a post
// @access  Private

router.post(
  '/comment/:post_id',
  [
    Auth,
    [
      check('text', 'Text is Required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);
      const user = await User.findById(req.user.id).select('-password');

      if (!post) return res.status(400).send("Post doesn't exists");

      const { text } = req.body;
      const name = user.name;
      const avatar = user.avatar;
      const newComment = {
        user: req.user.id,
        text,
        name,
        avatar
      };

      post.comments.unshift(newComment);
      await post.save();

      res.send(post);
    } catch (err) {
      console.log(err.message);
      if (err.kind == 'ObjectId') {
      }
      res.status(500).send('Server Error');
    }
  }
);

// @router  DELETE api/posts/comment/:post_id/:comment_id
// @desc    DELETE comment from a post
// @access  Private

router.delete('/comment/:post_id/:comment_id', Auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    const comment = post.comments.find(
      comment => comment.id == req.params.comment_id
    );
    if (!comment) return res.status(400).send("Comment doesn't exists");

    if (comment.user.toString() !== req.user.id)
      return res.status(401).send('Not your post to delete');

    const index_delete = post.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    if (index_delete == -1) return res.status(400).send('Cant delte');
    post.comments.splice(index_delete, 1);

    await post.save();

    res.send(post);

    // res.send(post);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
    }
    res.status(500).send('Server Error');
  }
});
module.exports = router;
