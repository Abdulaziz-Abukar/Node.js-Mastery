# What Are Express Routers?

> An **Express Router** is like a **mini Express app**. It lets you group related routes into their own files. This keeps your code clean, modular, and scalable.

## Visual Analogy:

```
📁 server.js (main file)
    |- users.js (all /user routes)
    |- products.js (all /products route)
    |- auth.js (login, register, etc.)
```

Each file:

- Has its own routes (GET POST DELETE, etc.)
- Gets "mounted" onto the main app using `app.use()`

## Why use Routers?

- keeps code **organized**
- makes it easier to maintain **large apps**
- lets you **reuse logic** or split by feature

## Step-by-Step Guide to Use Routers

let's build a **User Router** as an example:

1. Your Project Structure

```
project/
|── server.js
|── routes/
    |── users.js
```

2. In `routes/users.js`

```
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("All users");
});

router.post("/", (req, res) => {
    res.status(201).send("User created");
});

router.delete("/:id", (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

module.exports = router;
```

3. In `server.js`

```
const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT});
});
```

### Resulting Routes

- `GET /users` -> `"All users"`
- `POST /users` -> `"Users Created"`
- `DELETE /users/:id` -> `"User 123 deleted"`
