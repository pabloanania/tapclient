function screenToggler(selector){
    $(selector).animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
}

function submitLogin(){
    var loginData = $('#login').serializeArray();
    var loginObj = {};

    for (var i=0; i<loginData.length; i++)
        loginObj[loginData[i].name] = loginData[i].value;

    Services.Login.login(loginObj, function(){
        // Loguea correctamente, enciende la ventana de chat
        screenToggler('#login_form');
        screenToggler('#chat_room');
        screenToggler('.toggle');

        // Hace refresh automático para traer los datos
        $("#message_list_refresh").click();
        $("#user_list_refresh").click();
    }, function(){
        alert("Credenciales incorrectas");
    });
}