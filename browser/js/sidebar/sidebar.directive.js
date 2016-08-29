juke.directive('sidebar', () => {
  return {
    restrict: 'E',
    controller: 'SidebarCtrl',
    templateUrl: '/templates/sidebar.html',
    scope: {
      playlist: '='
    }
  }
})
