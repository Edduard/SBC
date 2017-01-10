var globalCatsList;
app.controller('mainMenuController', function ($scope) {

  $scope.catsList;
  $scope.tempCatsList;

  $scope.load = function () {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'app/XML/XMLfile.xml', false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var x2js = new X2JS();
        var jsonObj = x2js.xml2js(xhr.responseText);
        globalCatsList = angular.copy(jsonObj);
        dataLoaded = true;
      }
    }
    xhr.send();
  }

  $scope.init = function () {
    $scope.load();
    $scope.catsList = angular.copy(globalCatsList);
  }

  $scope.reload = function () {
    $scope.catsList = angular.copy(globalCatsList);
    $scope.tempCatsList = angular.copy(globalCatsList);
  }

  $scope.save = function () {
    globalCatsList = angular.copy($scope.tempCatsList);
  }

  $scope.test = function () {
    console.log("global");
    console.log(globalCatsList);
    console.log("temp");
    console.log($scope.tempCatsList);
    console.log("_");
    console.log($scope.catsList);
  }

  $scope.loadSelectedCats = function (mySelect) {
    switch (mySelect) {
      case "All":
        {
          $scope.reload();
        }
        break;
      case "Young cats":
        {
          $scope.reload();
          for (i = 0; i < globalCatsList.cats.cat.length; i++) {
            if (globalCatsList.cats.cat[i].age > 2) {
              delete $scope.catsList.cats.cat[i];
            }
          }
        }
        break;
      case "White cats":
        {
          $scope.reload();
          $scope.catsList = angular.copy(globalCatsList);
          for (i = 0; i < globalCatsList.cats.cat.length; i++) {
            if (!globalCatsList.cats.cat[i].color.includes("white")) {
              delete $scope.catsList.cats.cat[i];
            }
          }
        }
        break;
      case "Male cats":
        {
          $scope.reload();
          $scope.catsList = angular.copy(globalCatsList);
          for (i = 0; i < globalCatsList.cats.cat.length; i++) {
            if (!globalCatsList.cats.cat[i].gender.includes("female")) {
              delete $scope.catsList.cats.cat[i];
            }
          }
        }
        break;
      default:
        {
          $scope.reload();
        }
        break;
    }
    setTimeout(function () {
      $scope.applyFilter();
    }, 1);
  }

  $scope.applyFilter = function (mySelect) {
    $('.nameIdentifier').each(function () {
      if ($(this).text().length == 0) {
        $(this).parent().parent().parent().css("display", "none");
      } else {
        $(this).parent().parent().parent().css("display", "block");
      }
    });
  }
});
