const deleteBooks = (req, res) => {
    fs.readFile(pathToFile2, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

        const books = JSON.parse(data);

        const id = Number(req.params.id);

        const index = books.findIndex((book) => book.id === id);

        if (index === -1) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        books.splice(index, 1);

        fs.writeFile(pathToFile2, JSON.stringify(books, null, 2), (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            }

            res.status(204).send();
        });
    });
}

module.exports = deleteBooks;