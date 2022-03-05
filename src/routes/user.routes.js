module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    router.post("/", users.create);
    router.get("/", users.list);
    router.get("/:id", users.get);
    router.delete("/:id", users.delete);
    router.post("/sessions", users.auth);
    
    app.use("/api/users", router);
}