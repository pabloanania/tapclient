Services = {
    Messages: {
        getUnreadAngular: function(httpContext, thenSuccessCallback, thenFailCallback){
            httpContext.get(Parameters.apiURL + '/api/messages?unread&token=' + Services.navToken).then(function(res){
                Services.navToken = res.data.token;
                thenSuccessCallback(res);
            }, function(res){
                thenFailCallback(res);
            });
        },

        send: function(messageObj, successCallback, failCallback){
            messageObj["token"] = Services.navToken;
            Services.restCalls("POST", Parameters.apiURL + "/api/messages", function(res){
                Services.navToken = res.token;
                successCallback(res);
            }, function(res){
                failCallback(res);
            }, messageObj);
        }
    },

    Users: {
        getAngular: function(httpContext, thenSuccessCallback, thenFailCallback){
            httpContext.get(Parameters.apiURL + '/api/users?token=' + Services.navToken).then(function(res){
                Services.navToken = res.data.token;
                thenSuccessCallback(res);
            }, function(res){
                thenFailCallback(res);
            });
        }
    },

    Login: {
        login: function(userDataObj, successCallback, failCallback){
            Services.restCalls("POST", Parameters.apiURL + "/api/login", function(res){
                Services.navToken = res.token;
                successCallback(res);
            }, failCallback, userDataObj);
        },
        logout: function(successCallback, failCallback){
            Services.restCalls("POST", Parameters.apiURL + "/api/logout", function(res){
                Services.navToken = "";
                successCallback(res);
            }, function(res){
                Services.navToken = "";
                failCallback(res);
            }, {"token": Services.navToken});
        },
    },

    restCalls: function(HTTPMethod, url, successCallback, failCallback, data){
        $.ajax({
            url: url,
            method: HTTPMethod,
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: successCallback,
            error: failCallback
        });
    },

    navToken: ""
}