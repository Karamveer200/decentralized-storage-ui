const multer = require('multer');
const express = require('express');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

//@route POST api/fileService/upload
//desc - uploads file to server
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const fileName = req.file.originalname;
    const fileContent = req.file.buffer.toString('utf-8');

    console.log('Received file:');
    console.log('File Name:', fileName);
    console.log('File Content:', fileContent);

    res.json({ success: true });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
