const express = require('express')
const cors = require('cors');
const port = 5000;
const app = express()

app.use(express.json())
app.use(cors());

app.use('/post', require('./routes/post'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})