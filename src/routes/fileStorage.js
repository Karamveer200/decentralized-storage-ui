const { check, validationResult } = require('express-validator');

const express = require('express');
const router = express.Router();

//@route GET api/getLeaderBoardByPassType
//desc - Get Leader board by pass type
router.get('/getLeaderBoardByPassType', async (req, res) => {

  try {
    const params = { pass_type: passType };
    res.json(leaderBoard);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//@route POST api/insertUserEmail
//desc - Post user email
router.post(
  '/insertUserEmail',
  [check('email', 'Valid email is required').isEmail().not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { accountId = '', email } = req.body;

      const params = { [HCS_KEYS.user_account_id]: accountId, [HCS_KEYS.email]: email };
      await insertUserEmail(params);

      res.send('Success');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
