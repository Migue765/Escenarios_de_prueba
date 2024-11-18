Feature: Gestión de Configuración (Settings)

@user1 @web
  Scenario: Habilitar edital el newsletters y verificar que cambió
    Given hago clic en el botón de configuración
    And habilito la suscripción a newsletters
    And I wait for 1 seconds
    When edito newsletters my blog
    Then valido cambios en newsletters