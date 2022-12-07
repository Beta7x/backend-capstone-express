const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send({ message: 'Express is running 🚀' });
});

module.exports = router;
