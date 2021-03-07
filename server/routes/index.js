const router = require('express').Router()
const aplikasiRoute = require('./aplikasi')

router.get('/', (req, res) => {
  res.send('API SocialMedia')
})
router.use('/api/aplikasi', aplikasiRoute)

module.exports = router
