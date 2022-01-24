import express from 'express';

const app = express();
app.use(express.json());

let usuarios = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    usuarios.push(req.body);
    res.send("OK");
})

app.post("/tweets", (req, res) => {
    const user = usuarios.find(usuario => usuario == req.body.username);
    const tweet = {username: req.body.username, avatar: user.avatar, tweet: req.body.tweet};
    tweets.push(tweet);
    res.send("OK");
})

app.get("/tweets", (req, res) => {
    res.send(tweets);
})

app.listen(5000);