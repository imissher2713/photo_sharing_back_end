const express = require("express");
const User = require("../db/userModel");
const router = express();

router.post("/", async (request, response) => {
  
});

router.get("/", async (request, response) => {
  
});
router.get('/list', async (req, res) => {
    try {
    const users = await User.find({}, '_id first_name last_name');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ error: 'Không thể lấy danh sách người dùng.' });
  }
});
router.get('/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.id, '_id first_name last_name location description occupation');
    if (!user) return res.status(400).send({ error: 'ID người dùng không hợp lệ' });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send({ error: 'ID người dùng không hợp lệ' });
  }
})
module.exports = router;