const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // اجازه می‌ده از دامنه‌های دیگه مثل localhost:5174 درخواست بفرستی
app.use(express.json()); // برای خوندن req.body

// POST /signup endpoint
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // فقط برای تست - می‌تونی اینجا ذخیره یا اعتبارسنجی هم انجام بدی
  console.log("📥 New signup request received:");
  console.log("Email:", email);
  console.log("Password:", password);

  // پاسخ به کلاینت
  res.status(200).json({ message: "Signup successful!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
