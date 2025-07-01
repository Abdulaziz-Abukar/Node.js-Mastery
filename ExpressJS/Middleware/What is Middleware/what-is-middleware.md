# What is Middleware?

In express, **middleware** is any function that runs **between the request and the response**. it can:

- Log things
- Modify the request or response objects
- End the request/response cycle
- Pass control to the next function

Every middleware function has this format:

```
(req, res, next) => {
    // Do something
    next(); // hand off to the next middleware or route
}
```

## Visual Flow of Middleware

```
Browser -> Middleware #1 -> Middleware #2  -> Route Handler -> Response
```

Or in code:

```
app.use((req, res, next) => {
    console.log("I'm first!");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello!);
})
```

## Key Terms

| Terms  |                          Meaning                           |
| :----- | :--------------------------------------------------------: |
| `req`  |                The incoming request object                 |
| `res`  |                the outgoing response object                |
| `next` | A function that tells Express to continue to the next step |

## Types of Middleware

| Type                                |             Used For             |
| :---------------------------------- | :------------------------------: |
| **Application-level (`app.use()`)** |      Runs for every request      |
| **Route-level**                     | Attached only to specific routes |
| **Built-in (`express.json()`)**     |      Included with Express       |
| **Third-party (`morgan`, `cors`)**  |        Installed via npm         |
