const express = require("express");
const app = express();
const PostModel = require("../models/Post");

app.use(express.json());

 class PostController {

    async index(req, res) {
        try {
            const posts = await PostModel.find({});
            res.status(200).json(posts);
        } catch (error) {
            console.log(error)
        }
    }

    store(req, res) {
        try {
            const post = PostModel.create(req.body);
            res.status(200).json(post);
        } catch (error) {
            console.log(error)
        }
    }

    // show() {}

    // update() {}
    // delete() {}
 }

module.exports = PostController;