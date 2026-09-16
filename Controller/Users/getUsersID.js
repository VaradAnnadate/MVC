const getUsersID = (req, res) => {
    fs.readFile(pathToFile, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
        const usersRouter = JSON.parse(data);
        const id = Number(req.params.id);
        const user = usersRouter.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json(user);
    });
}

module.exports = getUsersID;