
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .constant('ApiEndpoint', {
        url: 'http://localhost:8100/api'
    })

angular.module('starter.services', [])

    .factory('Api', function($http, ApiEndpoint) {
        console.log('ApiEndpoint', ApiEndpoint)

        var getApiData = function() {
            return $http.get(ApiEndpoint.url + '/tasks')
                .then(function(data) {
                    console.log('Got some data: ', data);
                    return data;
                });
        };

        return {
            getApiData: getApiData
        };
    })


//Example of simple REST get request in Ionic
exampleApp.controller('ExampleController', function($scope, $http) {

    $scope.getData = function() {
        $http.get("http://localhost/example.json", { params: { "key1": "value1", "key2": "value2" } })
            .success(function(data) {
                $scope.firstname = data.firstname;
                $scope.lastname = data.lastname;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }

});


//Example of solving CORS problems
//To solve CORS problems you need to setup a proxy server that sends our request to the the real api.
//To do this setup ionic.project like this.

{
    "name": "proxy-example",
    "app_id": "",
    "proxies": [
    {
        "path": "/api",
        "proxyUrl": "http://cors.api.com/api"
    }
]
}
