const express = require('express');
const path = require('path');
const userRoute = require('./src/routes/user.route'); 

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));  

app.use(express.urlencoded({ extended: true }));

app.use(userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
