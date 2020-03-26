const express = require('express')
const router = express.Router()

const moment = require('moment-timezone')

// Add your routes here - above the module.exports line

router.post('/legal-authority-answer', function (req, res) {
  let legalAuthority = req.session.data['legal-authority']

  if (legalAuthority === 'yes') {
    res.redirect('/agreement')
  } else {
    res.redirect('/no-legal-authority')
  }
})

router.post('/accept', function (req, res) {
  let date = moment().tz('Europe/London')
  req.session.data['signature-date'] = date.format("D MMMM YYYY")
  req.session.data['signature-time'] = date.format("HH:mm z")

  res.redirect('/confirmation')
})

router.get('/countersign', function (req, res) {
  res.redirect('/email-03')
})

module.exports = router
