# AnteProyecto LibreMusic

![Logo AnteProyecto](/images/icon.svg)

*Autor:* Héctor del Real López

*Ies Franciso Romero Vargas (Jerez de la Frontera)*

*Desarrollo de Aplicaciones Web*

*Curso:2023-2024*
## Índice 
- [Introducción](#introducción)
- [Finalidad](#finalidad)
- [Medios necesarios](#medios-necesarios)
- [Planificación](#planificación)

## Introducción

En este proyecto crearemos una aplicación web en la que encontrar música sin copyright, llamada LibreMusic. Para ello usaremos la API de Jamendo, la cual nos permitirá acceder a una gran librería de música. También podemos acceder a la información de cada artista y así poder ofrecer al usuario una búsqueda selectiva.
El proyecto se va a desarrollar usando los frameworks de Symfony integrado con React. Symfony nos permite integrar React con Webpack Encore. Usar estos frameworks nos ayudará a controlar ambos back-end y front-end de nuestro proyecto. En Symfony desarrollaremos las rutas de nuestras páginas internamente y también el manejo de los datos que insertaremos en la base de datos. En React programaremos el uso de la API y otras funciones mas visuales de nuestra aplicación.

## Finalidad

La finalidad de este proyecto es brindar al usuario una interfaz sencilla de usar donde encontrar música sin copyright y poder usarla, o simplemente escucharla. Algunos de los objetivos de la aplicación son:
1. **Acceso fácil y rápido:** ofrecer a nuestros usuarios una interfaz sencilla de usar para que puedan encontrar la música que se adapte a sus gustos

1. **Variedad de géneros:** gracias a la API de Jamendo, el usuario tendrá acceso a una gran variedad de géneros diferentes para satisfacer sus necesidades.

1. **Licencias claras:** nuestra aplicación proporcionará información sobre las licencias de uso de cada una de las canciones. De esta manera el usuario puede comprender cómo puede utilizar la música que descargue.

1. **Actualizaciones regulares:** la integración de la API nos permite mantener una biblioteca actualizada de música

1. **Interacción social:** aunque el uso principal de la aplicación sea la búsqueda y descarga de música, también queremos que nuestros usuarios compartan y recomienden música a otros usuarios. Esto ayudará a la plataforma a ganar más usuarios.

## Objetivos

1. **Secciones:** Un apartado de géneros para que el usuario pueda explorar canciones sin tener que usar la búsqueda.

2. **Integracion con la API de Jamendo:** Usar la API para ofrecerle al usuario los datos siempre actualizados.

3. **Reproductor de música:** un reproductor que permita al usuario escuchar las canciones.

4. **Listas de reproducción**: la posibilidad de crear listas de reproducción que los usuarios puedan compartir

5. **Perfil de usuario:** Un perfil que cada usuario pueda personalizar donde se guardaran las listas de reproducción del usuario y también sus seguidores y seguidos.

6. **Escalabilidad**: programaremos el proyecto para poder actualizar y añadir características en un futuro.

## Medios necesarios

Para el desarrollo de la aplicación vamos a necesitar lo siguiente:

1. **Ordenador**: Un ordenador en el que ejecutar las aplicaciones necesarias para el desarrollo

2. **Sistema operativo**: En este caso usaremos Manjaro, una distribución de Linux basada en Arch.

3. **Entorno de desarrollo**: Usaremos Codium, con varias extensiones de React, Symfony, Twig, PHP y HTML.

4. **Acceso a Internet**: Una conexión a internet para poder acceder a nuestra API y que los usuarios puedan también acceder a la aplicación desde el exterior

5. **Base de datos**: Vamos a usar MariaDB donde guardaremos los datos de los usuarios

6. **Hosting y Dominio**: utilizaremos un hosting on-line para nuestra página web y conseguiremos un dominio con el nombre de LibreMusic

## Planificación

### Fase 1: Preparacion Inicial (Semana 1-2)
#### Semana 1:

- Planificación extensa del proyecto
- Investigación de React y Symfony
- Investigación de uso de la api de Jamendo

#### Semana 2:
- Diseño de la aplicación
- Configuración de los medios necesarios para el desarrollo del proyecto
### Fase 2: Desarrollo de la base de la aplicación (Semana 3-7)
#### Semana 3:
- Desarrollo de las rutas de la página y conexión de la base de datos con Symfony
- Acceso a la API
#### Semana 4: 
- Implementación de acceso con usuario
- Desarrollo del CRUD para el usuario administrador
#### Semana 5:
- Desarrollo del reproductor de música
- Inserción de secciones predefinidas
#### Semana 6:
- Implementación de las listas de reproducción
- Diseño de estilos
#### Semana 7:
- Añadir sección de licencias en cada una de las canciones
### Fase 3: Pruebas y Hosting (Semana 8-9)
#### Semana 8:
- Pruebas de cada uno de las funcionalidades de la aplicación para comprobar su funcionamiento
- Correción de los errores encontrados durante las pruebas
#### Semana 9:
- Adquirir el hosting y el dominio
- Hostear la aplicación en Internet usando un vps
### Fase 4: Documentación y Entrega (Semana 10)
- Documentación del codigo de la aplicación
- Entrega del proyecto al profesorado
### Fase 5: Mejoras después de la Entrega
- Mejoras en base a la retroalimentación de los profesores

Horas totales: **70**
