const axios = require('axios');

module.exports = {
  getUser(username) {
    return axios
	    .get(`https://api.github.com/users/${username}`)
      .then(res => {
        // console.log(res.data);
        return res.data})
      .catch(errror => console.log(error));
  }
}
