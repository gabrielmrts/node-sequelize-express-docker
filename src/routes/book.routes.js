module.exports = app => {
    const books = require("../controllers/book.controller.js");
    var router = require("express").Router();

    router.post("/", books.create);
    router.get("/", books.list);
    router.get("/:isbn", books.get);
    router.delete("/:isbn", books.delete);
    
    app.use("/api/books", router);
}