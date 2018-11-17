Services = {
    Messages: {
        getUnread: function(successCallback, failCallback){
            Services.restCalls("GET", "/api/messages?unread", successCallback, failCallback);
        },

        getUnreadAngular: function(httpContext, thenSuccessCallback, thenFailCallback){
            httpContext.get(Parameters.apiURL + '/api/messages?unread&token=' + Services.navToken).then(thenSuccessCallback, thenFailCallback);
        }
    },

    Users: {
        getAngular: function(httpContext, thenSuccessCallback, thenFailCallback){
            httpContext.get(Parameters.apiURL + '/api/users?token=' + Services.navToken).then(thenSuccessCallback, thenFailCallback);
        }
    },

    Login: {

    },

    restCalls: function(HTTPMethod, url, successCallback, failCallback, data){
        $.ajax({
            url: "/api/providers/" + this.msgs.id,
            method: HTTPMethod,
            data: JSON.stringify(this.msgs),
            contentType: 'application/json',
            success: successCallback(),
            fail: failCallback()
        });
    },

    navToken: ""
}