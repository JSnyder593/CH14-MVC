const router = require('express').Router();
const { User, Entry, Comment } = require('../../Models')

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.json(commentData)
    } catch (err) {
        res.json({ message: err.message })
    }
});

router.get('/id', async (req, res) => {
    try {
        const commentsData = await Comment.findByPk(req.params.id);
        res.json(commentsData);
    } catch (err) {
        res.json({ message: err.message })
    }
});

router.post('/:id', async (req, res) => {
    if (!req.session.activeUser) {
        return res.status(401).json({ message: "You can't comment if you're not logged in" })
    }
    try {
        const newCommentData = await Comment.create({
            body: req.body.body,
            UserId: req.session.activeUser.id,
            PostId: req.params.id
        })
        res.json(newCommentData);
    } catch (err) {
        res.json({ message: err.message })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const delData = await Comment.destroy({ where: { id: req.params.id } })
        res.json(delData)
    } catch (err) {
        res.json({ message: err.message })
    }
});

module.exports = router;