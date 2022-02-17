const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

const PORT = 3030

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);
require("./routes/book.routes")(app);

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});

//await the database initialization
setTimeout(() => {
    db.sequelize.sync();
}, 1000);
