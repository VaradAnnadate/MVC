const postUsers = (req, res) => {
    fs.readFile(pathToFile, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
        const usersRouter = JSON.parse(data);
        const newUser = {
            id: usersRouter.length + 1,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            city: req.body.city,
        };
        usersRouter.push(newUser);

        fs.writeFile(pathToFile, JSON.stringify(usersRouter, null, 2), (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            }

            res.status(201).json(newUser);
        });
    });
}

module.exports = postUsers;