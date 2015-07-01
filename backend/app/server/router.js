module.exports = function(app) {
  app.get('/me', function(req, res) {
    res.json(APP.config.user);
  });
};
