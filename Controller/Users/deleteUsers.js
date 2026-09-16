const deleteUsers = (req, res) => {
    fs.readFile(pathToFile, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

        const usersRouter = JSON.parse(data);
        const id = Number(req.params.id);
        const index = usersRouter.findIndex((user) => user.id === id);
        if (index === -1) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        usersRouter.splice(index, 1);
        fs.writeFile(pathToFile, JSON.stringify(usersRouter, null, 2), (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            }
            res.status(204).send();
        });
    });
}

module.exports = deleteUsers;