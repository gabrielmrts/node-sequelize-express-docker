const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);

app.listen(3030, () => {
    console.log('running on 3030');
});

db.sequelize.sync();