var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(cors({origin: true}));
  app.use(bodyParser.json());
};
