const express = require("express");
const app = express();
const postsRouter = require("./router/posts");
const PORT = 3000;

app.use("/users/:userId/posts", postsRouter);
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
