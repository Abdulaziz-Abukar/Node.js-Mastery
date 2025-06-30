# Using Query Strings

> **Query strings** are the little extra pieces you add to the end of a URL:

```
/search?term=pizza&sort=price
```

in Express, you access these using `req.query`:

```
app.get('/search', (req, res) => {
    const term = req.query.term;
    const sort = req.query.sort;

    res.send(`Searching for ${term}, sorted by ${sort}`);
});
```

## Visual Guide:

```
Browser requests: /search?term=laptop&sort=popularity

Server sees:

    req.query.term => "laptop"
    req.query.sort => "popularity"
```
