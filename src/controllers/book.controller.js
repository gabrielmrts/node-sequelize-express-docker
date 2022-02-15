const db = require("../models");
const Book = db.books;

exports.create = async (req, res) => {
    const book = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author
    }

    await Book.create(book);

    return res.status(201).json({
        error: false,
        msg: "Book created successfuly"
    });
}

exports.list = async (req, res) => {
    const books = await Book.findAll({
        attributes: ['isbn', 'title', 'author']
    });

    return res.json({
        error: false,
        msg: books
    });
}

exports.get = async (req, res) => {
    const isbn = req.params.isbn;

    const book = await Book.findOne({
        where: {
            isbn: isbn
        },
        attributes: ['isbn', 'title', 'author']
    });

    if (book) {
        return res.json({
            error: false,
            msg: book
        });
    }

    return res.status(404).json({
        error: true,
        msg: "Book not found"
    });
}

exports.delete = async (req, res) => {
    const isbn = req.params.isbn;

    const book = await Book.findOne({
        where: {
            isbn: isbn
        }
    });

    if (book) {
        await Book.destroy({
            where: {
                isbn: isbn
            }
        });

        return res.status(204).send();
    }

    return res.status(404).send();
}