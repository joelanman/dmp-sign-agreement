const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/legal-authority-answer', function (req, res) {
  let legalAuthority = req.session.data['legal-authority']

  if (legalAuthority === 'yes') {
    res.redirect('/agreement')
  } else {
    res.redirect('/no-legal-authority')
  }
})

module.exports = router
