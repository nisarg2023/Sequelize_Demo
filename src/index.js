const express = require('express');
const BodyParser  = require('body-parser')
const usersRouter = require('./router/user.router');
const postRouter = require('./router/post.router');
const app = express();

app.use(BodyParser.json());

app.use("/user",usersRouter);
app.use("/post", postRouter);


app.listen(8080, () => {
    console.log("server start on 8080");
});