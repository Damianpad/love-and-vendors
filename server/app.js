const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

app.get('/')

app.use(express.static('../client/dist'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})