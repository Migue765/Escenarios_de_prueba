Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Modificar el nombre del sitio en la configuración general y verificar el cambio en la interfaz
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "-:pM7A388!aDufu"
    When hago clic en iniciar sesión
    When hago clic en la sección de páginas
    When hago clic en el botón de nueva página
    When ingreso el título "Nuevo Título del Sitio"
    When guardo la página
    Then envío una señal al usuario 1 que contiene "El nombre del sitio ha sido modificado"

  @user2 @web
  Scenario: Actualizar la descripción del sitio en la configuración general
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "-:pM7A388!aDufu"
    When hago clic en iniciar sesión
    When hago clic en la sección de páginas
    When hago clic en el botón de nueva página
    When ingreso la descripción "Nueva Descripción del Sitio"
    When guardo la página
    Then envío una señal al usuario 1 que contiene "La descripción del sitio ha sido actualizada"

  @user3 @web
  Scenario: Configurar una integración personalizada en la sección avanzada y verificar su creación
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "-:pM7A388!aDufu"
    When hago clic en iniciar sesión
    When navego a la página de configuración avanzada
    When agrego una nueva integración personalizada con el nombre "Integración Personalizada"
    Then debería ver "Integración Personalizada" en la lista de integraciones

  @user4 @web
  Scenario: Eliminar una integración y verificar que desaparezca de la lista activa
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "-:pM7A388!aDufu"
    When hago clic en iniciar sesión
    When navego a la página de configuración avanzada
    When elimino la integración "Integración Personalizada"
    Then envío una señal al usuario 1 que contiene "La integración ha sido eliminada"

  @user5 @web
  Scenario: Habilitar la suscripción a newsletters y verificar que la opción esté disponible
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "-:pM7A388!aDufu"
    When hago clic en iniciar sesión
    When habilito la suscripción a newsletters
    Then envío una señal al usuario 1 que contiene "La suscripción a newsletters ha sido habilitada"
