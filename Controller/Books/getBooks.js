const getBooks = (req, res) => {
    fs.readFile(pathToFile2, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

        const books = JSON.parse(data);

        // handles /books?minPrice=400
        if (req.query.minPrice) {
            const minPrice = Number(req.query.minPrice);

            const filteredBooks = books.filter((book) => book.price >= minPrice);

            return res.status(200).json(filteredBooks);
        }

        res.status(200).json(books);
    });
}

module.exports = getBooks;