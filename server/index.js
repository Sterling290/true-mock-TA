const express = require('express');

const app = express();
app.get("/",(req,res) => res.send('sent'))
app.post("/",(req,res) => res.send('made it'))
app.listen(3000, () => console.log('server is up on port 3000'));
