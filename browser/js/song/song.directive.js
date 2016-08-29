juke.directive('songList', (PlayerFactory) => {
  return {
    restrict: 'E',
    templateUrl: '/templates/songList.html',
    scope: {songs: '='},
    link: function (scope) {
      angular.extend(scope, PlayerFactory)
      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs)
        } else if (PlayerFactory.isPlaying()) {
          PlayerFactory.pause()
        } else {
          PlayerFactory.resume()
        }
      }
    }
  }
})

// juke.directive('doubleClick', () => {
//   return {
//     restrict: 'A',
//     scope: {
//       doubleClick: '&'
//     },
//     link: function (scope, element) {
//       element.on('mouseover', function () {
//         scope.doubleClick()
//       })
//     }
//   }
// })
