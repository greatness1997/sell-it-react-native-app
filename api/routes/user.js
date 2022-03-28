const User = require("../models/User.js");
const router = require("express").Router();
const {
    verififyTokenAndAuthourization,
    verifyToken,
} = require("./verifyToken");

router.put("/:id", verifyToken, (req, res) => {
    User.findOne({ username: req.body.username })
        .then((user) => {
            if (user) {
                User.findOneAndUpdate({ user: req.user._id }, { $set: req.body }, { new: true }).then((user) => res.json(user));
            } else {
                res.status(404).json("user not found");
            }
        })
        .catch((err) => console.log(err));
});

module.exports = router;