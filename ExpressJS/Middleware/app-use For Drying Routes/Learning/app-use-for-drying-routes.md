# `app.use` for DRYing Routes

## What Does This Mean?

> `app.use()` can apply middleware or routes to a **group of paths**, instead of writing them individually.

This is about making your route definitions **cleaner and DRYer**. Especially when multiple routes share the same base path or logic.

## Quick Refresher

**Without** `app.use()`

```
app.get('/shirts', ...);
app.get('/shirts/:id, ...);
```

**With** `app.use()`

```
app.use('/shirts', shirtsRouter);
```

Then inside `shirtsRouter`, you only define paths relative to `/shirts`.

## Why This Is Useful

lets say you want

- All `/products` routes to use a product router ✅
- All `/users` routes to use user middleware ✅
- All `api/v1/` routes to go to versioned logic ✅

instead of repeating `/products/...` 5 times, you just write:

```
app.use('/products', productsRouter);
```

and inside the `productsRouter`

```
router.get('/', ...);   // handles /products
router.post('/', ...);   // handles /products
router.get('/:id', ...);   // handles /products/:id
```

## Real World Analogy

> Think of `app.use('/shirts', router)` like:  
> "Hey, for anything under `/shirts`, use this little app (router) to handle it.

It's like assigning one employee (router) to manage all shirt-related customers in a store. You don't need to tell them each case - just that anything under `/shirts` is theirs.
