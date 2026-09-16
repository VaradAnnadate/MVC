const getBooksID = (req, res) => {
    fs.readFile(pathToFile2, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

        const books = JSON.parse(data);

        const id = Number(req.params.id);

        const book = books.find((book) => book.id === id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        res.status(200).json(book);
    });
}

module.exports = getBooksID;