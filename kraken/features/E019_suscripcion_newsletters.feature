Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Habilitar la suscripción a newsletters y verificar que la opción esté disponible
    Given hago clic en el botón de configuración
    And habilito la suscripción a newsletters
    When espero 5 segundos
    Then valido cambios en newsletters
