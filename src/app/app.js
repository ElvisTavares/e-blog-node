const express = require("express");
const app = express();
const PostController = require("./controllers/PostController");
const cors = require('cors');


app.use(express.json());
app.use(cors())

app.get("/home", (req, res) => {
    res.status(200).send("ola");
});



const postController = new PostController();

app.get("/posts", async (req, res) => {
   
    postController.index(req, res);
});

app.post("/post", (req,res) => {
    postController.store(req, res);
});

const port = 8080;
app.listen(port, () => console.log("Rodando"));