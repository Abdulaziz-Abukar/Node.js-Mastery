# Route-Level `app.use()` - Multiple Paths

## What's the Goal?

So far, you've applied middleware to:

- Global requests `app.use(middleware)`
- a single path: `app.use('/admin', middleware)`

Now you'll apply the **same middleware to multiple paths, without repeating yourself**

### Old Way (Repetitive)

```
app.use('/shirts', logger);
app.use('/pants', logger);
app.use('/hoodies', logger);
app.use('/shoes', logger);
```

### DRY Way (Better)

```
const sharedPaths = ['/shirts', '/pants', '/hoodies'];
app.use(sharedPaths, logger);
```

> This tells Express: Use `logger` on all of these paths.

## Real World Analogy

> Think of it like setting up _one security guard_ to monitor **three hallways** instead of hiring three sepearate guards.

- Hallway A = `/shirts`
- Hallway B = `/pants`
- Hallway C = `/hoodies`

Rather than writing separate logic, you give them **one checkpoint** that works for all.

## Middleware Logic Still Applies

Even when applied to multiple paths:

- The middleware runs **before the router**
- It still gets `req`, `res`, `next`
- You can apply **additional logic inside** (e.g. branching per path if needed)
