juke.directive('albumList', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/albumList.html',
    scope: {albums: '='}
  }
})
