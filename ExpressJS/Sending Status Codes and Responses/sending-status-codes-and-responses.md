# Sending Status Codes and Responses

> When your server responds, you should tell the client **how things went** using a **status code:**

| Code | Meaning                |
| ---- | ---------------------- |
| 200  | OK (successful GET)    |
| 201  | CREATED (POST success) |
| 400  | Bad Request            |
| 404  | Not Found              |
| 500  | Internal Server Error  |

Express makes this super simple:

`res.status(200).send("Success!");`

You can chain `.status()` and `.send()` together for clarity.

## Visual Guide

```
Client -> GET /search/apple

Server -> res.status(200).send("You searched for apple");

Client sees:
    ✅ Status code: 200
    📦 Body: "You searched for apple"
```
