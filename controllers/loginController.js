loginapp.controller('loginController',
    function ($http, $scope, APIBASEURL, $window) {
        var login = $scope.login = {};
        
        login.init = function() {
            console.log(APIBASEURL);
        }
        login.init();
        login.userlogin = function () {
            login.passwordfail = false;
            var payload = {
                username: login.username,
                password: login.password
            };
            // console.log("Inside the login");
            console.log(login.username, login.password);

            $http({
                url: 'login_user',
                method: 'POST',
                data: payload
            }).then(function (response_obj) {
                var response = response_obj.data;
                console.log(response);
                if(response.message){
                    login.passwordmessage = response.message;
                    if(response.message == "Password is Incorrect"){
                        login.passwordfail = true;
                        // window.location = window.location.origin;
                    }
                    else{
                        login.passwordfail = true;
                    }
                }
                else{
                    login.passwordfail = false;
                    window.location = window.location.origin + "/#!/login_sucess";
                }
                // $window.location.href = '/loginSucess.html';
                // $window.location.replace("/login_sucess")
                // window.location = window.location.origin + "/#!/login_sucess";
                
            }).catch(function (error) {
                console.log(error);
                login.passwordmessage = "Invalid Username";
            });

            // $window.location.href = '/loginSucess.html';
            
        }


    });