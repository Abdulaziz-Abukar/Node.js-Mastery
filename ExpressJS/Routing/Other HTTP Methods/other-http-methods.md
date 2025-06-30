# Other HTTP Methods - POST, DELETE, PUT

> So far, you've been using `GET` which is for reading/fetching data. But a real API handles **other HTTP methods** to create, update, or delete data.

| Method   | Purpose     | Express Method |
| -------- | ----------- | -------------- |
| `GET`    | Read Data   | `app.get()`    |
| `POST`   | Create Data | `app.post()`   |
| `PUT`    | Update Data | `app.put()`    |
| `DELETE` | Delete Data | `app.delete()` |

These are how APIs become interactive, not just read-only.

Example:

```
app.post('/products', (req, res) => {
    res.status(201).send('Product created!')
});

app.delete('/products/:id', (req, res) => {
    res.send(`Deleted product ${req.params.id}`);
})
```

## Visual Guide:

```
POST /products          ===> Add a new product

DELETE /products/101    ===> Remove product with ID 101
```
