Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Actualizar la descripción del sitio en la configuración general
    Given navego a "<URL>"
    When espero 5 segundos
    When ingreso el correo electrónico "<EMAIL>"
    And ingreso la contraseña "<PASSWORD>"
    When hago clic en iniciar sesión
    When hago clic en el botón de configuración
    When hago clic en el botón de editar título y descripción
    When ingreso la descripción "Nueva Descripción del Sitio"
    When guardo la página
    Then la descripción del sitio debería ser "Nueva Descripción del Sitio"
