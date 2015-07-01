require('app-context').loadFromPackage().catch(function(err) {
  console.log(err.stack);
});
