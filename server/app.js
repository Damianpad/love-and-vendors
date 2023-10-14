const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();
const path = require("path");

const port = process.env.PORT || 5000;

// Serve the React frontend
app.use(express.static("../client/dist")); // Adjust the path as needed
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist"));
});

// app.get("/", (req, res) => {
//   res.render("home");
// });

// setup routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`
 |   |                                         |    |
 |   | Server is up and running on port ${port}🚀 |    |
 |   |_________________________________________|    |
 |                                                  |
 \\_________________________________________________/
        \\___________________________________/
      ___________________________________________
   _-\'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- \`-_
_-\'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.\`-_
_-\'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-\`__\`. .-.-.-.\`
  `);
});
