const express = require('express')
const app = express()

const port = process.env.PORT || 5000;


// Serve the React frontend
app.use(express.static('../client/dist')); // Adjust the path as needed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})