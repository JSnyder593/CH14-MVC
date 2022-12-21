const router = require('express').Router();
const { User, Entry, Comment } = require('../../Models')

router.get('/:id', (req, res) => {
    Entry.findByPk(req.params.id, {
        include: Comment
    }).then((entry) => {
        res.json(entry)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ err: err })
    });

});

router.post('/', async (req, res) => {

    if (!req.session.logged_in) {
        return res.status(401).json({ msg: "You've gotta log in for that!" })
    }
    try {
        const newEntry = await Entry.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newEntry);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {


    if (!req.session.logged_in) {
        return res.status(401).json({ msg: "You've gotta log in for that!" })
    }
    try {
        const entryData = await Entry.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if (!entryData) {
            res.status(404).json({ message: 'No entry found with this id' })
            return;
        }

        res.status(200).json(entryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;