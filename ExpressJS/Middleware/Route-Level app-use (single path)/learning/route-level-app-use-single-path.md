# Route-Level `app.use` (Single Path);

## Whats the Point?

So far, you've used `app.use` globally. But express lets you attach middleware to **specific paths** so it only runs when that path is requested.

This is known as **route-level middleware**

```
app.use('/admin', authCheck);
```

This way, `authCheck` middleware only runs for `/admin`, `/admin/settings', etc. It keeps middleware **targeted**, clean, and efficient.

## Visual Guide

```
/admin -> runs auth middleware
/about -> skips it
```

```
app.use('/admin', (req, res, next) => {
    console.log("Checking admin access");
    next();
})
```
