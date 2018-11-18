Services = {
    Messages: {
        getUnreadAngular: function(httpContext, thenSuccessCallback, thenFailCallback){
            httpContext.get(Parameters.apiURL + '/api/messages?unread&token=' + Services.navToken).then(function(res){
                Services.navToken = res.data.token;
                thenSuccessCallback(res);
            }, thenFailCallback);
        }
    },

    Users: {
        getAngular: function(httpContext, thenSuccessCallback, thenFailCallback){
            httpContext.get(Parameters.apiURL + '/api/users?token=' + Services.navToken).then(function(res){
                Services.navToken = res.data.token;
                thenSuccessCallback(res);
            }, thenFailCallback);
        }
    },

    Login: {
        login: function(userDataObj, successCallback, failCallback){
            Services.restCalls("POST", Parameters.apiURL + "/api/login", function(res){
                Services.navToken = res.token;
                successCallback(res);
            }, failCallback, userDataObj);
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