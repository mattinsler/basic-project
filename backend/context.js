var connie = require('connie')
var AppContext = require('app-context');
var initialize = require('app-context-initialize');

module.exports = AppContext.createContext({
  configure: function() {
    this.use(
      AppContext.RunLevel.Configured,
      connie('file', 'config.json').initializer()
    );

    this.use(
      AppContext.RunLevel.Running,
      initialize({
        express: {
          root: 'app/server',
          config: '$server'
        }
      })
    )
  }
});
