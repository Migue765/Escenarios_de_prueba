# Grupo 6
## Integrantes
* [Natalia Arango](mailto:a.arandio@uniandes.edu.co)
* [Jazmín Cordoba](mailto:jn.cordobap1@uniandes.edu.co)
* [Miguel Gómez](mailto:ma.gomeza1@uniandes.edu.co)
* [Juan Mejía](mailto:je.mejiai1@uniandes.edu.co)

---------
# Escenarios de prueba
En este proyecto se definieron 20 escenarios de prueba para evaluar cinco funcionalidades del proyecto Ghost, utilizando dos herramientas distintas: Kraken y Cypress.

## Funcionalidades trabajadas

<details>
<summary> 1. Registro e Inicio de Sesión</summary>

**Responsable**: Angie Natalia Arandio Niño

**Funcionalidad** enfocada en el flujo de autenticación y registro de usuarios en la aplicación.

**Escenarios:**
1. Registro de un nuevo usuario con datos válidos.
2. Registro de un usuario con un correo electrónico ya registrado.
3. Registro de un usuario sin completar todos los campos requeridos.
4. Inicio de sesión con credenciales válidas.
5. Inicio de sesión con credenciales incorrectas.
6. Intento de inicio de sesión sin completar el campo de contraseña.
7. Verificación de mensaje de error al iniciar sesión con una cuenta no verificada (si aplica).
8. Inicio de sesión y redirección automática a la página de inicio.
9. Verificación de opciones de recuperación de contraseña.
10. Cierre de sesión exitoso y redirección a la página de inicio de sesión.

</details>

<details>
<summary> 2. Gestión de Contenidos (Páginas, Publicaciones, Borradores)</summary>


**Responsable**: Miguel Alejandro Gomez Alarcon

**Funcionalidad** que permite a los usuarios crear, editar y publicar contenido en forma de páginas o publicaciones.

**Escenarios:**
1. Creación de una nueva página y verificación en la lista de páginas.
2. Creación de una nueva publicación y verificación en la lista de publicaciones.
3. Guardar una publicación como borrador y verificar que aparece en la lista de borradores.
4. Editar el contenido de una página existente y guardar cambios.
5. Eliminar una publicación y verificar que no aparece en la lista de publicaciones.
6. Aplicar etiquetas a una publicación y verificar que se guardan correctamente.
7. Programar una publicación para una fecha futura y verificar el estado "Programado".
8. Previsualizar una publicación antes de publicarla.
9. Publicar una página y verificar que aparece correctamente en la vista del sitio.
10. Mover una publicación de "Borrador" a "Publicado" y verificar el cambio de estado.

</details>

<details>
<summary> 3. Gestión de Configuración (Settings)</summary>

**Responsable**: Jazmin Natalia Cordoba Puerto

**Funcionalidad** que incluye configuraciones generales y avanzadas de Ghost, como el ajuste de detalles del sitio y configuraciones de integraciones.

**Escenarios:**
1. Modificar el nombre del sitio en la configuración general y verificar el cambio en la interfaz.
2. Actualizar la descripción del sitio en la configuración general.
3. Configurar una integración personalizada en la sección avanzada y verificar su creación.
4. Desactivar una integración y verificar que desaparezca de la lista activa.
5. Configurar un mensaje de bienvenida en la página principal.
6. Habilitar la suscripción a newsletters y verificar que la opción esté disponible.
7. Configurar la inyección de código HTML en el encabezado de la página y verificar su efecto en la vista del sitio.
8. Configurar un banner de "Sitio en mantenimiento" y verificar que aparezca.
9. Ajustar el diseño de membresías y verificar la actualización en la vista del sitio.
10. Restablecer la configuración de integración personalizada y confirmar la eliminación de los cambios previos.

</details>

<details>
<summary> 4. Gestión de Miembros (Members)</summary>

**Responsable**: Miguel Alejandro Gomez Alarcon

**Funcionalidad** para gestionar los suscriptores o miembros que tienen acceso a las publicaciones y newsletters.

**Escenarios:**
1. Agregar un nuevo miembro y verificar que aparece en la lista de miembros.
2. Editar la información de un miembro existente y guardar los cambios.
3. Eliminar un miembro y verificar su eliminación de la lista.
4. Cambiar el estado de un miembro (por ejemplo, de activo a inactivo).
5. Filtrar la lista de miembros por estado (activo/inactivo) y verificar la precisión de la lista.
6. Enviar un newsletter de prueba a un miembro específico y verificar el mensaje de envío.
7. Habilitar la opción de que los miembros vean su historial de actividades.
8. Revisar el historial de actividad de un miembro.
9. Agregar un miembro y asignarle un rol específico (si la funcionalidad está habilitada).
10. Verificar que un miembro puede cancelar su membresía desde su perfil (si aplica).

</details>

<details>
<summary> 5. Administración de Etiquetas y Secciones</summary>

**Responsable**: Juan Esteban Mejía Isaza

**Funcionalidad** Permite a los administradores organizar el contenido usando etiquetas y gestionar secciones como Drafts, Published, etc.

**Escenarios:**
1. Crear una nueva etiqueta y verificar que esté disponible para asignar a publicaciones. 
2. Editar el nombre de una etiqueta existente y guardar los cambios. 
3. Eliminar una etiqueta y verificar que no aparece en la lista de etiquetas. 
4. Asignar múltiples etiquetas a una publicación y verificar que se guardan correctamente. 
5. Filtrar las publicaciones por etiqueta en la sección de Posts.
6. Mover una publicación de "Draft" a "Published" y verificar el cambio de estado. 
7. Crear una etiqueta desde una página de publicación y verificar que se guarde en la lista de etiquetas. 
8. Asignar una etiqueta a varias publicaciones y verificar la actualización. 
9. Verificar la visualización de publicaciones "Publicadas" en la vista de sitio. 
10. Eliminar una etiqueta de una publicación y verificar que no aparezca en la lista de etiquetas asignadas a esa publicación.

</details>

## Instalación

Para utilizar las herramientas de este proyecto, asegúrate de tener instaladas las siguientes herramientas:

1. **Node.js**: Se recomienda usar la versión v12.22.12. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **Ghost-admin**: El cual se puede instalar y ejecutar siguiendo la siguiente [guia](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#1), propuesta en clase.

## Kraken 🐙
-- Desde terminal ira a la ruta donde tenemos instalado ghost local y ejecutar ghost stop
-- Ir a la carpeta donde se encuentra la base local y eliminarla ...ghost\content\data --ghost-local
-- Desde la terminal nos situamos donde tenemos la carpeta de kraken 
-- Antes de ejecutar primero ir a carpeta Kraken\FeatureFuncionalidades y tomar el archivo register 
-- Reemplazar el archivo por el que se encuentre en la ruta ..Kraken\features 
-- Volvemos desde la terminal  y  ejecutamos  npx kraken-node run
-- Ahora vamos a  ...Kraken\FeatureFuncionalidades y tomar el archivo login 
-- Reemplazar el archivo por el que se encuentre en la ruta ..Kraken\features 
-- Volvemos desde la terminal y ejecutamos  npx kraken-node run

Nota: Tener en cuenta que para que funcionen las pruebas debe existir solo un archivo .FEATURE en la carpeta features y 
se deben ejecutar en el orden indicado primero register y luego login


## Cypress

NOTA: Se recomienda al igual que los pasos iniciales de Kraken reiniciar el ghost para ver correctamente el Registro
-- Desde la terminal vamos a la carpeta de Cypress
-- En la terminal ejecutamos npx cypress open
-- Nos abira la interfaz y vamos a E2E Testing	
-- Seleccionamos el navegador de preferencia y damos star E2E
-- Damos click  register 
-- Seleccionamos en el menu speacs  login
