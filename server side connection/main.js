const express = require("express");
const app = express();
app.listen(3000, () => console.log('Server is Connected at Port 3000'));
app.use(express.static('public'));