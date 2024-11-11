Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Habilitar la suscripción a newsletters y verificar que la opción esté disponible
    Given navego a "<URL>"
    When espero 5 segundos
    When ingreso el correo electrónico "<EMAIL>"
    And ingreso la contraseña "<PASSWORD>"
    When hago clic en iniciar sesión
    When hago clic en el botón de configuración
    When habilito la suscripción a newsletters
    When espero 5 segundos
    #Then envío una señal al usuario 1 que contiene "La suscripción a newsletters ha sido habilitada"
