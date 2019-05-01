const express = require('express');
const router  = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.redirect('project', { projects });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const templateData = { id };

    console.log(id);

    res.render('project', templateData);
});

module.exports = router;