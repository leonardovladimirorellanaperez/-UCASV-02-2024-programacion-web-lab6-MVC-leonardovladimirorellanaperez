1. ¿Cuál es el propósito del servicio addNewUser?
El servicio addNewUser se encarga de crear un nuevo usuario. Recibe la información del usuario (como nombre, apellido y correo), 
la usa para crear un objeto de usuario y luego lo guarda. Esto permite que el código esté más organizado y que, si necesitamos 
crear más usuarios en el futuro, podamos hacerlo de manera más fácil y consistente sin repetir el mismo proceso en varios lugares.

2. ¿Para qué se utiliza res.render() en los controladores?
El método res.render() se usa en los controladores para mostrar una página web al usuario. Toma una plantilla (como un archivo HTML o Pug) y la llena con datos, como la información de un usuario, antes de enviarla al navegador. Esto ayuda a que las páginas cambien según los datos que se necesitan mostrar, y permite separar la lógica de la aplicación de cómo se ve la página.


3. ¿Qué datos se envían a la vista home.pug desde el controlador addUserController?
En el controlador addUserController, se envía a la vista home.pug el objeto user, que contiene la información del nuevo usuario creada al llamar al servicio addNewUser. Este objeto incluye datos como el nombre, apellido, correo electrónico y un identificador único generado para el usuario. Estos datos se pasan a la vista para ser mostrados dinámicamente en la página web, permitiendo que la vista se actualice con la información del usuario recién creado.




















