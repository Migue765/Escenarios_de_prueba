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


### Ghost

<details>
<summary>Instalación de Ghost 5.1</summary>


1. **Crea un directorio para tu instalación de Ghost**:

   Abre tu terminal y ejecuta:

   ```bash
   mkdir ~/ghost_5.1
   cd ~/ghost_5.1
   ```

2. **Instala Ghost CLI**:

   Ejecuta el siguiente comando:

   ```bash
   npm install -g ghost-cli
   ```

3. **Instala Ghost en la versión específica**:

   Ejecuta el siguiente comando para instalar Ghost 5.1 en tu carpeta:

   ```bash
   ghost install local 5.1.0
   ```

4. **Configura y ejecuta Ghost**:

   Una vez finalizada la instalación, inicia Ghost con:

   ```bash
   ghost start
   ```

5. **Accede al panel de administración**:

   Visita `http://localhost:2368/ghost` para acceder a la interfaz de administración y crear tu usuario.

6. **Detener y reiniciar Ghost**:

   Usa `ghost stop` para detener Ghost y `ghost start` para reiniciarlo cuando sea necesario.

</details>

<details>
<summary>Instalación de Ghost 4.5</summary>

1. **Crea un directorio para tu instalación de Ghost**:

   Abre tu terminal y ejecuta:

   ```bash
   mkdir ~/ghost_4.5
   cd ~/ghost_4.5
   ```

2. **Instala Ghost CLI**:

   Ejecuta el siguiente comando:

   ```bash
   npm install -g ghost-cli@1.15.0
   ```

3. **Instala Ghost en la versión específica**:

   Ejecuta el siguiente comando para instalar Ghost 4.5 en tu carpeta:

   ```bash
   ghost install local 4.5.1
   ```

4. **Configura y ejecuta Ghost**:

   Una vez finalizada la instalación, inicia Ghost con:

   ```bash
   ghost start
   ```

5. **Accede al panel de administración**:

   Visita `http://localhost:2368/ghost` para acceder a la interfaz de administración y crear tu usuario.

6. **Detener y reiniciar Ghost**:

   Usa `ghost stop` para detener Ghost y `ghost start` para reiniciarlo cuando sea necesario.

</details>



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


Aquí tienes un instructivo mejorado y más estructurado para instalar y ejecutar Cypress en un proyecto específico en macOS:



## Cypress

### 1. Configura NVM

#### Ejecuta los siguientes comandos en tu terminal para configurar NVM correctamente:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Carga nvm
```

### 2. Instala y Usa Node.js

#### Se recomienda usar Node.js versión 12.10.0. Ejecuta estos comandos:

```bash
nvm install 12.10.0    # Instala Node.js 12.10.0
nvm use 12.10.0        # Usa la versión instalada
node -v                # Verifica que la versión de Node.js sea correcta
```

### 3. Navega a la Carpeta del Proyecto

#### Accede a la carpeta donde está el proyecto:

```bash
cd /cypress
```

#### Ajusta el *LOCALHOST* en el archivo *cypress.config.js*

### 4. Instala Dependencias del Proyecto

#### Instala la paquetería de Node.js necesaria para el proyecto:

```bash
npm install
```

### 5. Instala Cypress Localmente

#### Instala Cypress como una dependencia de desarrollo:

```bash
npm install cypress --save-dev
```

### 6. Abre la Interfaz Gráfica de Cypress

#### Para ejecutar Cypress y abrir la interfaz gráfica, utiliza el siguiente comando:

```bash
npx cypress open
```

### 7. Selecciona la Opción de Pruebas E2E

#### Una vez que la interfaz de Cypress esté abierta:

- Elige la opción **E2E Testing**.
- Selecciona el navegador de tu preferencia para ejecutar las pruebas.
- Ejecuta las pruebas según las carpetas provistas


