const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
router.get('/', (req, res) => {
  const input = sanitizeHtml(req.query.input);
  // ... process input
  res.send(`Processed: ${input}`);
});
module.exports = router;