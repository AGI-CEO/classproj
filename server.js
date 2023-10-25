import pg from "pg";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

const client = new pg.Client({
  connectionString: "postgresql://pets:pets@localhost/test",
});

client.connect();

app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/users", (req, res) => {
  client.query("SELECT * FROM Users", (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.get("/api/orders", (req, res) => {
  client.query("SELECT * FROM Orders", (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.post("/api/orders", (req, res) => {
  const { userId, productId, quantity } = req.body;
  client.query(
    "INSERT INTO Orders (userId, productId, quantity) VALUES ($1, $2, $3)",
    [userId, productId, quantity],
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.put("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  const { userId, productId, quantity } = req.body;
  client.query(
    "UPDATE Orders SET userId = $1, productId = $2, quantity = $3 WHERE id = $4",
    [userId, productId, quantity, id],
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.patch("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  const { userId, productId, quantity } = req.body;
  client.query(
    "UPDATE Orders SET userId = $1, productId = $2, quantity = $3 WHERE id = $4",
    [userId, productId, quantity, id],
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.delete("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  client.query("DELETE FROM Orders WHERE id = $1", [id], (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
