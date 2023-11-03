const router = require("express").Router();

// auth login
router.get("/login", (req, res) => {
  // res.render("login");
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google
router.get("/google", (req, res) => {
  // handle with passport.
  res.send("logging in with google");
});

module.exports = router;
