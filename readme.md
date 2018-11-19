# TO DO:
* Mostrar el estado de los usuarios según logged in u out
* Los usuarios deberian mostrar el nombre en la lista de mensajes
    * Directamente va a buscar a los users cada vez que arma la lista de mensajes, sorry no time :_ (

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

# WISH LIST:
* Registración
* La lista de usuarios tiene una animacion rara
* La lista de usuarios tendría que tener un background como el contenedor central
* El botón de salir tendría que tener el mismo estilo que el del "Nueva cuenta"
* Instalar Swal para alertas
* favicon