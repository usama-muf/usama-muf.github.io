const Express = require('express');
const router = Express.Router()
const { body, validationResult } = require('express-validator');
const Posts = require('../models/Post');


// ROUTE 0:  Ge all Posts GET: "/post/allpost". LOGIN not Required
router.get('/allpost', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    // await Posts.sync({ force: true })
    try {
        const posts = await Posts.findAll();
        return res.status(200).send(posts);

    } catch (error) {
        return res.status(500).send("internal server error");
    }
})

// ROUTE 1:  Ge Post by id GET: "/post/:id". LOGIN not Required
router.get('/:id', async (req, res) => {
    // await Posts.sync({ force: true })
    res.set('Access-Control-Allow-Origin', '*');

    try {
        const post = await Posts.findByPk(req.params.id);
        return res.status(200).send(post);

    } catch (error) {
        return res.status(500).send("internal server error");
    }
})

// ROUTE 2:  Add a new Post POST: "/post/addpost". LOGIN not Required
router.post('/addpost', [
    // body('title', 'Enter Title').isLength({ min: 5 }),
    // body('category', 'Enter Category').isLength({ min: 0, max: 100 }),
    // body('description', 'Enter Description').isLength({ min: 10 }),
], async (req, res) => {
    // await Posts.sync({ force: true })
    console.log("inside /addpost backedn")
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // const error = validationResult(req);

    // if (!error.isEmpty()) {
    //     return res.status(400).json({ error: error.array() })
    // }
    const { title, description, category } = req.body;
    console.log('post in postjs backend', req.body)

    try {
        const post = await Posts.create({ title: title, category: category, description: description });
        return res.status(200).send(post);

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });

    }
})

// ROUTE 3:  Delete a  Post DELETE: "/post/deletepost/:id". LOGIN not Required
router.delete('/deletePost/:id', async (req, res) => {
    try {

        const post = await Posts.findByPk(req.params.id);
        if (!post) return res.status(404).send("NOT FOUND");

        await Posts.destroy({ where: { postId: post.postId } });
        return res.status(200).send("success");


    } catch (error) {
        return res.status(500).send("Internal Server Error");

    }
})

// ROUTE 3:  Update a  Post PUT: "/post/updatepost/:id". LOGIN not Required
router.put('/updatepost/:id', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    try {

        const post = await Posts.findByPk(req.params.id);
        if (!post) return res.status(404).send("NOT FOUND");

        const newPost = {};
        const { title, description, category, likes } = req.body;

        if (title) newPost.title = title;
        if (description) newPost.description = description;
        if (category) newPost.category = category;


        await Posts.update(newPost, { where: { postId: post.postId } });
        return res.status(200).json({ msg: "success" });


    } catch (error) {
        return res.status(500).send("Internal Server Error");

    }
})


module.exports = router;