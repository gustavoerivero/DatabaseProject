# DatabaseProject/Backend

_Este proyecto representa el proyecto final para la asignatura Base de Datos del 
Programa de Ingeniería en Informática del Decanato de Ciencias y tecnología de la Universidad 
Centroccidental "Lisandro Alvarado", Venezuela._

## Comenzando 🚀

_Para la elaboración del proyecto en cuestión, se utilizó como herramienta y lenguaje de programación para el backend de la aplicación Java con el framework de Spring Boot. Por otra parte, para la elaboración del frontend del proyecto, se usó HTML, CSS, JavaScript y el framework React.js, así como también librerías de JavaScript y React.js para agregarle mayores capas de estilo y funcionalidades (Material-UI y JsPDF). Asimismo, como Sistema Gestor de Base de Datos (SGBD) se utilizó MySQL y, para comprobar el funcionamiento del backend, se aprovecharon las funciones que provee la aplicación web Postman._

_En un aspecto más detallado, el frontend sigue la filosofía del framework React.js, donde se divide en componentes cada parte de las vistas, de manera que es más fácil tratar el frontend. Además, la aplicación tiene la función de generar un comprobante en formato PDF con el fin de asegurar los datos ingresados en la aplicación y, así, el cliente pueda dirigirse a la oficina seleccionada para culminar su proceso de apertura de cuenta bancaria._

_Por otra parte, el backend fue construido bajo la metodología de Programación Orientada a Objetos (POO), siguiendo el esquema Modelo-Vista-Controlador (MVC), de esta forma, la estructura del proyecto se hace fácilmente legible y permite un mejor mantenimiento y escalabilidad del proyecto en cuestión.
Por último, se hizo uso de MySQL Workbrench por los beneficios que trae al ser uno de los SGBD ligeros y aceptados por diversos sistemas y plataformas, lo que ayudó a la construcción del proyecto sin inconveniente alguno._

## Enunciado ♨️
Es un servicio que permite solicitar a través de nuestra página web la apertura de una cuenta financiera (corriente o de ahorros). Dirigido a personas naturales, mayores de edad. Servicio de fácil uso que permite la autogestión del cliente al momento de solicitar la apertura de una cuenta financiera.
* Siga la ruta a la sección de preapertura de cuentas.
* Haga click en el botón Solicite su cuenta aquí.
* Ingrese los datos solicitados por el sistema.
* Seleccione la oficina de su preferencia.
* El sistema emitirá un comprobante de su solicitud con los datos seleccionados.


### Pre-requisitos 📋

* Última versión estable de [Node.js](https://nodejs.org/en/)

_O, en su defecto_

* Última versión estable de [Yarn](https://yarnpkg.com/)

* Java 8 o superior.

* [Postman](https://www.postman.com/) para las solicitudes HTTP.

* Para el proyecto se usó [IntelliJ](https://www.jetbrains.com/es-es/idea/) como IDE en la construcción
del backend, pero también se puede utilizar [Eclipse](https://www.eclipse.org/downloads/packages/release/2021-09/r/eclipse-ide-enterprise-java-and-web-developers) o [NetBeans](https://netbeans.apache.org/).

* Para el proyecto se usó [Visual Studio Code](https://code.visualstudio.com/) como editor de texto para la 
elaboración del frontend, pero se puede utilizar otro editor de texto.

* [MySQL](https://www.mysql.com/products/workbench/) como SGBD.

### Instalación 🔧

_Para comenzar, se procede con la descarga del repositorio. Para ello se debe abrir la consola,
ubicarse en la carpera en la que desea guardar el proyecto y ejecutar el siguiente comando:_

```
git clone https://github.com/gustavoerivero/DatabaseProject.git
```

_Luego, situarse en la carpeta clonada del repositorio "DatabaseProject"._

_Para el caso de un Sistema Operativo Windows, con el comando:__

```
cd DatabaseProject/project
```

* _Para preparar el entorno del backend:_

_Para correr el servidor del backend, se debe abrir la carpeta "backend_"
con un IDE para aplicaciones Java o un editor de texto con extensiones para archivos Java._

_Luego, se procede a correr la aplicación, o ejecutar el comando "Run" sobre 
el archivo "FlameBankBackendProjectApplication.java"._

## Despliegue 📦

* _Para realizar un desplegue local (localhost:8080) del backend, se procede a realizar los siguientes pasos:_

- _Ejecutar el servidor con el comando "Run" en el archivo "FlameBankBackendProjectApplication.java"._

- _Iniciar la base de datos en MySQL llamada "dbproject". MySQL tendría los datos predeterminados (contraseña null en usuario root)._

- _(Opcional): De ser necesario, usar Xampp para preparar el entorno de MySQL y así ejecutarlo._

_Luego de esto, se abrirá una nueva pestaña con la aplicación en ejecución._

## Construido con 🛠️

_Es bueno recalcar que el código del backend fue desarrollado con:_

* [Maven](https://maven.apache.org/) - Herramienta de Java para el desarrollo de aplicaciones con manipulación de variables o documentos con formato JSON.
* [Spring Boot](https://spring.io/projects/spring-boot) - Framework de Java para el desarrollo de aplicaciones web.


---
⌨️ con ❤️ por [Equipo Polaris] 