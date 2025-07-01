# EXPRESS BODY PARSING (JSON Input Handling)

## What is Body Parsing?

When a client sends a **POST** or **PUT** request, they often send data like a form submission, or a user registration.

🧠 But here's the catch:

> That data doesn't automatically show up in `req.body` unless you use middleware to **parse** it!

That's where this line comes in:

```
app.use(express.json());
```

This tells Express:

> "Please looking for any incoming JSON data and **turn it into a JS object** i can access."

## Visual Breakdown

```
Client sends a POST to /users
  ↳ Body: {"name": "Abdulaziz", "email": "abdul@email.com"}

Without express.json():
  ↳ req.body = undefined ❌

with express.json():
  ↳ req.body = {name: "Abdulaziz", email: "abdul@email.com"} ✅
```

## How To Set It Up (1 line)

Place this **before your routes:**

```
app.use(express.json());
```

now every route that receives JSON can use `req.body`
