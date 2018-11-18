// Cambia entre los paneles de la aplicación
function screenToggler(selector){
    $(selector).animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
}

// Disparado al enviar login
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

// Disparado al enviar mensaje
function submitMessage(){
    var msgs = [];
    var recipients = $(".user_check:checked");
    var message = $('#input_chat')[0].value;

    for (var i=0; i<recipients.length; i++){
        msgs[i] = {};
        msgs[i]["message"] = message;
        msgs[i]["to"] = recipients[i].getAttribute("user_name");

        Services.Messages.send(msgs[i], function(res){
            alert("El mensaje se ha enviado exitosamente");
        }, function(res){
            alert("El envío de mensaje ha fallado a uno de los destinatarios");
        });
    }
}