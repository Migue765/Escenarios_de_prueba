# Registro e inicio de sesión

#Kraken

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


#Cypress

NOTA: Se recomienda al igual que los pasos iniciales de Kraken reiniciar el ghost para ver correctamente el Registro
-- Desde la terminal vamos a la carpeta de Cypress
-- En la terminal ejecutamos npx cypress open
-- Nos abira la interfaz y vamos a E2E Testing
-- Seleccionamos el navegador de preferencia y damos star E2E
-- Damos click  register 
-- Seleccionamos en el menu speacs  login

