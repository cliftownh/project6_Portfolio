const express = require('express');
const router  = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const templateData = projects[id];

    res.render('project', templateData);
});

module.exports = router;