# Matching Route Paths

> Sometimes routes need to be dynamic like when fetching a specific user or post by ID.

`GET /user/42`

To match that in Express, you use a **route parameter** like this:

```
app.get('/user/:id`, (req, res) => {
    res.send(`User ID is ${req.params.id});
});
```

- `:id` = wildcard placeholder
- `req.params.id` = the **actual value** sent in the URL (`42` in `/user/42`);

## Visual Guide:

```
Client requests     ===>    Server matches pattern      ===>    server uses dynamic value

GET /user/42        ===>    /user/:id                   ===> req.params.id -> "42"

```
