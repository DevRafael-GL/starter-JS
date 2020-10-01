axios.get('https://api.github.com/users/DevRafael-GL')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });


