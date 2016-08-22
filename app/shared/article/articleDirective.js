module.exports = function() {
  return {
    restrict: 'AE',
    templateUrl: 'app/shared/article/articleView.html',
    replace: true
    // TODO: This creates a new scope for the directive. Not the scope from the parent page.
    // scope: {
    //
    // }
  }
}
