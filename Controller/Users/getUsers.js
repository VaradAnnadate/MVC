const getUsers = (req, res) => {
    fs.readFile(pathToFile, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
        // handles both /usersRouter and /usersRouter?minAge=20
        const usersRouter = JSON.parse(data);
        if (req.query.minAge) {
            const minAge = Number(req.query.minAge);
            const filteredUsers = usersRouter.filter((user) => user.age >= minAge);
            return res.status(200).json(filteredUsers);
        }
        res.status(200).json(usersRouter);
    });
}

module.exports = getUsers;