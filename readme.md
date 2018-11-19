# TO DO:
* Agarrar algun whish

# TO DOCUMENT:
* No va bootstrap
* El tema de CORS:
    * Tiraba que no permitia origen 'null'
    * Obligo a pasar el proyecto a otro node.js
    * Hubo que poner capa mas en middleware que escribiera response headers con Access-Control-Allow-Origin adecuado
    * También el Access-Control-Allow-Headers
* Action en la form estaba dando resultados raros, haciendo que se recargue la página automáticamente e invocando failCallback
* Mocha + Chai instalados en server, modificaciones en client. mocha.run() desde consola para correr
* Se agregó api/logout y en login se setea variable logged
    * Cada vez que al usuario se le vence el token se desloguea
* Object id string vs. object id objeto de mongodb
* Quitar token al crear usuario desde la API

# WISH LIST:
* favicon
* Instalar Swal para alertas
* La lista de usuarios tiene una animacion rara
* La lista de usuarios tendría que tener un background como el contenedor central
* El botón de salir tendría que tener el mismo estilo que el del "Nueva cuenta"