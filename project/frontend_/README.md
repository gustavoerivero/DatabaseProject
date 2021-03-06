# DatabaseProject/Frontend

_Este proyecto representa el proyecto final para la asignatura Base de Datos del 
Programa de Ingenier铆a en Inform谩tica del Decanato de Ciencias y tecnolog铆a de la Universidad 
Centroccidental "Lisandro Alvarado", Venezuela._

## Comenzando 馃殌

Para la elaboraci贸n del proyecto en cuesti贸n, se utiliz贸 como herramienta y lenguaje de programaci贸n para el backend de la aplicaci贸n Java con el framework de Spring Boot. Por otra parte, para la elaboraci贸n del frontend del proyecto, se us贸 HTML, CSS, JavaScript y el framework React.js, as铆 como tambi茅n librer铆as de JavaScript y React.js para agregarle mayores capas de estilo y funcionalidades (Material-UI y JsPDF). Asimismo, como Sistema Gestor de Base de Datos (SGBD) se utiliz贸 MySQL y, para comprobar el funcionamiento del backend, se aprovecharon las funciones que provee la aplicaci贸n web Postman.

En un aspecto m谩s detallado, el frontend sigue la filosof铆a del framework React.js, donde se divide en componentes cada parte de las vistas, de manera que es m谩s f谩cil tratar el frontend. Adem谩s, la aplicaci贸n tiene la funci贸n de generar un comprobante en formato PDF con el fin de asegurar los datos ingresados en la aplicaci贸n y, as铆, el cliente pueda dirigirse a la oficina seleccionada para culminar su proceso de apertura de cuenta bancaria.

Por otra parte, el backend fue construido bajo la metodolog铆a de Programaci贸n Orientada a Objetos (POO), siguiendo el esquema Modelo-Vista-Controlador (MVC), de esta forma, la estructura del proyecto se hace f谩cilmente legible y permite un mejor mantenimiento y escalabilidad del proyecto en cuesti贸n.

Por 煤ltimo, se hizo uso de MySQL Workbrench por los beneficios que trae al ser uno de los SGBD ligeros y aceptados por diversos sistemas y plataformas, lo que ayud贸 a la construcci贸n del proyecto sin inconveniente alguno.

## Enunciado 鈾笍
Es un servicio que permite solicitar a trav茅s de nuestra p谩gina web la apertura de una cuenta financiera (corriente o de ahorros). Dirigido a personas naturales, mayores de edad. Servicio de f谩cil uso que permite la autogesti贸n del cliente al momento de solicitar la apertura de una cuenta financiera.
* Siga la ruta a la secci贸n de preapertura de cuentas.
* Haga click en el bot贸n Solicite su cuenta aqu铆.
* Ingrese los datos solicitados por el sistema.
* Seleccione la oficina de su preferencia.
* El sistema emitir谩 un comprobante de su solicitud con los datos seleccionados.


### Pre-requisitos 馃搵

* 脷ltima versi贸n estable de [Node.js](https://nodejs.org/en/)

_O, en su defecto_

* 脷ltima versi贸n estable de [Yarn](https://yarnpkg.com/)

* Java 8 o superior.

* [Postman](https://www.postman.com/) para las solicitudes HTTP.

* Para el proyecto se us贸 [IntelliJ](https://www.jetbrains.com/es-es/idea/) como IDE en la construcci贸n
del backend, pero tambi茅n se puede utilizar [Eclipse](https://www.eclipse.org/downloads/packages/release/2021-09/r/eclipse-ide-enterprise-java-and-web-developers) o [NetBeans](https://netbeans.apache.org/).

* Para el proyecto se us贸 [Visual Studio Code](https://code.visualstudio.com/) como editor de texto para la 
elaboraci贸n del frontend, pero se puede utilizar otro editor de texto.

* [MySQL](https://www.mysql.com/products/workbench/) como SGBD.

### Instalaci贸n 馃敡

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

* _Para preparar el entorno del frontend:_

_Se procede con la instalaci贸n de las librer铆as y dependencias necesarias para su ejecuci贸n.
Primeramente, se accede a la carpeta del frontend._

```
cd frontend_
```

Luego, se instalan las dependencias del frontend. Cabe destacar que hay diferentes maneras de realizar esto._

_Con npm:_

```
npm install
```

_De no funcionar, intentar con:_

```
npm i -f
```

_De utilizar yarn:_

```
yarn upgrade
```

_Una vez se logre la instalaci贸n de las dependencias, el frontend est谩 listo para desplegarse._

## Despliegue 馃摝

* _Para realizar un desplegue local (localhost:3000) del frontend, se procede a ejecutar uno de los siguientes comandos:_

_Con npm:_

```
npm start
```

_Con yarn:_
```
yarn start
```


## Construido con 馃洜锔?

_Es bueno recalcar que el c贸digo del frontend fue desarrollado con:_

* [React.js](https://es.reactjs.org/) - El framework web usado.
* [React Router](https://reactrouter.com/) - Librer铆a de React.js para la navegaci贸n entre p谩ginas.
* [Material UI](https://material-ui.com/) - Librer铆a de React.js para dise帽o de componentes visuales.
* [React VFX](https://amagi.dev/react-vfx/) - Librer铆a de React.js para a帽adir efectos VFX a im谩genes, v铆deos y/o textos.
* [React Top Bar Progress Indicator](https://www.npmjs.com/package/react-topbar-progress-indicator) - Librer铆a de React.js para a帽adir una barra superior que indica la carga de la p谩gina.
* [jsPDF](https://www.npmjs.com/package/jspdf) - Librer铆a para frontend con el prop贸sito de generar archivos PDFs.
* [Google reCAPTCHA v2](https://www.npmjs.com/package/react-google-recaptcha) - Componente de Google para realizar verificaciones con reCAPTCHA.
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) - Librer铆a de React.js que facilita el redireccionamiento entre p谩ginas.
* [React Scroll](https://www.npmjs.com/package/react-scroll) - Librer铆a de React.js que crea animaciones de desplazamiento al estilo "scroll" autom谩tico.
* [react-swipeable-views](https://react-swipeable-views.com/getting-started/installation/) - Librer铆a de React.js para desarrollar elementos "Carrusel".

## Autores 鉁掞笍

_Los autores de este proyecto son:_

* **Gustavo Rivero** - [gustavoerivero](https://github.com/gustavoerivero)
* **Mar铆a Paredes**  - [Mariaparedes](https://github.com/Mariaparedes)
* **Oswaldo Yanez**  - [WolvesDevelopers](https://github.com/WolvesDevelopers)




---
鈱笍 con 鉂わ笍 por [Equipo Polaris] 
