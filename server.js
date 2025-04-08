const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  console.log("📥 New signup request received:");
  console.log("Email:", email);
  console.log("Password:", password);

  res.status(200).json({ message: "Signup successful!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});