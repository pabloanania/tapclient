describe("Testing Cliente Chat", function () {
    // Setea timeout ya que el default es 2 segundos
    this.timeout(4000);

    it("Iniciando sesión con usuario cacho < 3 segundos", function (done) {
        $("input[name='username']")[0].value = "cacho";
        $("input[name='password']")[0].value = "1234";
        $("#login_send").click();
        setTimeout(function(){
            expect(Services.navToken.length).to.not.equal(0);
            done();
        }, 3000);
    });

    it("Enviar mensaje mediante el servicio", function (done) {
        Services.Messages.send({'to': 'pepe', 'message': 'Hola soy cacho y estoy probando Mocha + Chai desde el client'}, function(res){
            expect(res.token).to.be.string;
            expect(res.token.length).to.not.equal(0);
            done();
        });
    });

    it("Verificar que estén listados los usuarios", function (done) {
        expect($("input[user_name]").length).to.not.equal(0);
        done();
    });
});