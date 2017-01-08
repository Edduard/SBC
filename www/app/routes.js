angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('mainMenu', {
        url: '/mainMenu',
        templateUrl: 'app/mainMenu/mainMenu.html',
        controller: 'mainMenuController'
      })


      .state('editXML', {
        url: '/editXML',
        templateUrl: 'app/editXML/editXML.html',
        controller: 'editXMLController'
      })

      //Use Cases    

      .state('queryXML', {
        url: '/queryXML',
        templateUrl: 'app/queryXML/queryXML.html',
        controller: 'queryXMLController'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/mainMenu');
  });
