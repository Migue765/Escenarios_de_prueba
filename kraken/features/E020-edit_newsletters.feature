Feature: Gestión de Configuración (Settings)

@user1 @web
  Scenario: Habilitar edital el newsletters y verificar que cambió
    Given navego a "<URL>"
    And espero 5 segundos
    And ingreso el correo electrónico "<EMAIL>"
    And ingreso la contraseña "<PASSWORD>"
    And hago clic en iniciar sesión
    And hago clic en el botón de configuración
    And habilito la suscripción a newsletters
    When edito newsletters my blog
    Then valido cambios en newsletters