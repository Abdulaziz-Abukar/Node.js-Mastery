# What is Error-Handling Middleware?

> It's a **special kind of middleware** that catches and handles errors across your app.

You use it to

- Handle thrown errors (`throw new Error(...)`)
- Handle passed errors (`next(err)`)
- Send user-friendly messages instead of crashes

## Special Rule:

Error-handling middleware has **4 arguments**, not 3.

```
function (err, req, res, next)
```

if Express sees **4 arguments**, it knows:
"Okay, this is an error handler."

## Real-World Use Case

Let's say something breaks:

```
throw new Error("Database failed");
```

Or:

```
next(new Error("Invalid user"));
```

Your normal middleware/route can't recover. So express looks for your **error handler**:

```
app.use((err, req, res, next) => {
  console.error(err.stack); // or log it to a file
  res.status(500).send("Something broke: " + err.message);
});
```
