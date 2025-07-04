# ROUTER PARAMETERS - `router.param()` and Merging Params

## Part 1: `router.param()` - Middleware for Dynamic Params

### What is it?

> `router.param()` allows you to **run middleware automatically** whenever a route contains a specific parameter (like `:id`)

This is perfect for:

- Looking up a resource (e.g., user, post, product)
- Validating parameter format
- Attaching data to req

### Syntax

```
router.param("id", (req, res, next, id) => {
  console.log(`ID param detected: ${id}`);
  req.userId = id; // attach to request object
  next();
});
```

Runs only on routes that use `:id`.

### Example

```
router.param("id", (req, res, next, id) => {
    console.log("Param middleware hit");
    req.userId = id;
    next();
});

router.get("/users/:id", (req, res) => {
    res.send(`User ID: ${req.userId});
})
```

## Part 2: Merging Parameters - `mergeParms: true`

### What's the Problem?

When using **nested routers**, the **parent route's params** (like `/users/:userId) are not available by default in the child router.

Now `req.params.userId` will be available in the nested router.

### Real Example

```
// main router
app.use("/users/:userId/posts, (postsRouter));

// postsRouter.js
const router = express.Router({mergeParams: true});

router.get("/", (req, res) => {
  res.send(`All posts for user: ${req.params.userId`});
});
```

Without `mergeParams: true`, `userId` would be `undefined`.
