const axios = require('axios').default;

axios.get('https://api.github.com/users/ankitt01')
.then((res) => {
    console.log(res.body);
})