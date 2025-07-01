# DRYing Code with Functions

## What Does "DRY" Mean?

> **DRY** = Don't Repeat Yourself  
> It means extracting shared logic into **functions** so your code stays clean, consistent, and easy to maintain.

In Express, middleware functions often do the same things in many places:

- Logging
- Validating Input
- Checking user roles

Rather than repeating logic in every route or middleware block, we **move it into a named function** and reuse it.

## Real-World Analogy

> Imagine you're a barista at a coffee shop. You don't learn how to make a cappuccino _every time_ - you follow the same steps.

☕Those steps = reusable logic (DRY)
☕ Doing it manually everytime = WET code (Write Everything Twice)

## Middleware Refactoring Example

```
app.use((req, res, next) => {
    console.log(`[LOG] ${req.method} at ${req.path});
    next();
})

app.get('/', (req, res, next) => {
    console.log(`[LOG] ${req.method} at ${req.path});
    next();
})
```

### Dry Refactor:

create a reusable function

```
function logger(req, res, next) {
    console.log(`[LOG] ${req.method} at ${req.path});
    next();
}
```

use it like this:

```
app.use(logger);

router.get('/', logger, (req, res) => {
    res.send("Welcome");
})
```
