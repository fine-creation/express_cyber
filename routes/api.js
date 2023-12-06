var express = require('express');
var router = express.Router();
const request = require('request');
const cors = require('cors'); // corsミドルウェアを追加

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
request('https://yesno.wtf/api', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;