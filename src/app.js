const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Hello, Cloud CI/CD!" });
});

// Start server (only if not in test)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
