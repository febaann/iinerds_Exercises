const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');


// Get gig list
router.get('/', (req, res) => 
    Gig.findAll()
    .then(gigs => { 
        res.render('gigs', {
           gigs
        });
    })
    .catch(err => console.log(err)));

// Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: 'Simple Wordpress website',
        technologies: 'wordpress,php,html,css',
        budget: '$1000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisi ipsum. Ut tortor metus, euismod quis hendrerit nec, consequat id orci. Cras semper semper tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
        contact_email: 'user2@gmail.com'
    }

    let { title, technologies, budget, description, contact_email } = data;

    // Insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    // return a promise
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;