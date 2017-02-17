const express = require('express');
const router = express.Router();

//Import burger model to access ORM methods
const burger = require('../models/burger.js');

//Define router
let hbsObject = {};
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        hbsObject.burger = data;
        res.render('index.html', hbsObject);
    });
});

router.post('/', (req, res) => {
    burger.insertOne(
        ['burger_name'],
        [req.body.name],
        () => res.redirect('/')
    );
});

router.put('/:id', (req, res) => {
    burger.updateOne(
        ['id', 'burger_name', 'devoured'],
        [req.body.id, req.body.name, true],
        'id', req.params.id,
        () => res.redirect('/')
    );
});

module.exports = router;