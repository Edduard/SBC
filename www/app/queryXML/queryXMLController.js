app.controller('queryXMLController', function ($scope) {

  $scope.print = function () {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'app/XML/XMLfile.xml', false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var x2js = new X2JS();
        var jsonObj = x2js.xml2js(xhr.responseText);
        $scope.cats = jsonObj.cats.cat;
      }
    }
    xhr.send();
  }
});
