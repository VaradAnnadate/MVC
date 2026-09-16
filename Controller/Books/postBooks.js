const postBooks = (req, res) => {
    fs.readFile(pathToFile2, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

        const books = JSON.parse(data);

        const newBook = {
            id: books.length + 1,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            category: req.body.category,
            available: req.body.available,
        };

        books.push(newBook);

        fs.writeFile(pathToFile2, JSON.stringify(books, null, 2), (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            }

            res.status(201).json(newBook);
        });
    });
}

module.exports = postBooks;