const patchBooks = (req, res) => {
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

        const updatedBook = {
            ...books[index],
            ...req.body,
        };

        books[index] = updatedBook;

        fs.writeFile(pathToFile2, JSON.stringify(books, null, 2), (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            }

            res.status(200).json(updatedBook);
        });
    });
}

module.exports = patchBooks;