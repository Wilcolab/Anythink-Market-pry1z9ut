const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//Hey Github Copilot, please help me write the code for this route to handle comments.
// Get all comments
router.get("/", async (req, res) => {
    try {
        /**
         * Retrieves all comments from the database and populates the 'user' field with the user's username.
         * @type {Promise<Array<Object>>}
         * @returns {Promise<Array<Object>>} A promise that resolves to an array of comment objects with populated user usernames.
         */
        const comments = await Comment.find().populate("user", "username");
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments" });
    }
});

// Delete a comment
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Error deleting comment" });
    }
});