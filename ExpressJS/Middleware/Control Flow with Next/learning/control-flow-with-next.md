# Control Flow with `next()`

## What is Middleware Control Flow

> In Express, `next()` is the **bridge** that moves the request through middleware -> route handlers -> error handlers.

But `next()` can also:

- **Control what happens** next
- **Short-circuit the flow** (e.g. send a response early)
- **Skip certain middleware**
- \*\*Trigger error-handling middleware with `next(err)`

| Pattern                         |             What It Does              |
| :------------------------------ | :-----------------------------------: |
| `next()`                        |   Move to the next middleware/route   |
| No `next()` and no `res.send()` |           The request hangs           |
| `next("error message")`         |  Skips to error-handling middleware   |
| Middleware stacking             |  Chain multiple middleware in order   |
| Branch with logic               | Run middleware only under a condition |

## Visual Guide

```
incoming request
   ↓
[ Middleware 1 ]
   ↓
[ Middleware 2 (if condition) ]
   ↓
[ Route Handler ]
   ↓
Response sent
```

If at any point you **don't call** `next()` or `res.send()`, the request hangs like it's stuck in traffic

## Example of Conditional Flow

```
function checkAuth(req, res, next) {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        return res.status(401).send("You must log in");
    }
    next();     // only run route handler if logged in
}
```
