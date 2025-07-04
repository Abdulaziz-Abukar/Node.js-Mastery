# What Are Middleware Stacks?

> A **middleware stack** is just **multiple middleware functions** that run in a specific order before sending a response.

You've already used:

```
router.get("/", logger, auth, (req, res) => res.send("Hi"));
```

That's a **stack** - Express will run

1. `logger`
2. `auth`
3. The route handler

You can **build stacks inline** (in a route) or with `router.use()`.

## Why Use a Stack?

It keeps your route logic **modular, clean and reusable**  
each function has a job:

- `logger()` -> logs requests
- `auth()` -> checks if user is logged in
- validate() -> ensures request body is valid
- controller() -> handles the actual request

## Visual Flow

```
Client -> logger -> checkAuth -> validate -> routeHandler -> res.send()
```

Each function must call `next()` to move forward

## Example: Basic Stack

```
function log(req, res, next) {
  console.log("Logged");
  next();
}

function sayHi(req, res, next) {
  console.log("Hi!");
  next();
}

app.get("/", log, sayHi, (req, res) => {
  res.send("Welcome");
});

```
