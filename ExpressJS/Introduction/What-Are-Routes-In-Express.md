# What Are Routes in Express?

> A **Route** is how your bakcend listens for specific requests from the browser of client.

Think of it like this:

`Browser: "Hey server, I need /about page"`

`Server: "Cool, here's your About Page!"`

In Express, a route looks like this:

```
app.get('/about', (req, res) => {
    res.send("About page");
})
```

- `app.get` -> listens for a GET request
- `'/about'` -> path the client visits
- `'(req, res)'` -> request and response objects
- `'res.send(...)'` -> sends a response to client

## Visual Guide

```
Browser request ====> Server matches route ====> Server sends response

GET /about      ====> app.get('/about')    ====> res.send("About page")
```
