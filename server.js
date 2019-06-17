const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/api/customers',(req, res) => {

    res.send(
        [{
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '이승찬',
            'birthday': '921212',
            'gender': '남자',
            'job': '직장인'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '홍길동',
            'birthday': '921212',
            'gender': '남자',
            'job': '직장인'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '아무개',
            'birthday': '921212',
            'gender': '남자',
            'job': '직장인'
          }]
    );
});

app.listen(port,() => console.log(`Listening on port of ${port}`));