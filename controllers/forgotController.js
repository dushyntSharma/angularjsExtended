loginapp.controller('forgotController',
    function ($http, $scope, APIBASEURL) {
        var forgot = $scope.forgot = {};
       
        forgot.init = function() {
            console.log(APIBASEURL);
        }
        forgot.init();
        forgot.Forgot = function () {
            var payload = {
                username: forgot.username
            };
            // console.log("Inside the login");
             console.log(forgot.username);


            $http({
                url: APIBASEURL + 'forgot_user',
                method: 'POST',
                data: payload
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    });