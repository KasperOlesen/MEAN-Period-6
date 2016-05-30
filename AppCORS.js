
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

