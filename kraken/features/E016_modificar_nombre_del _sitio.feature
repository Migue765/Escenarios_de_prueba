Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Modificar el nombre del sitio en la configuración general y verificar el cambio en la interfaz
    When hago clic en el botón de configuración
    When hago clic en el botón de editar título y descripción
    When ingreso el título "Nuevo Título del Sitio"
    When guardo la página
    Then el nombre del sitio debería ser "Nuevo Título del Sitio"

  ## Limpio escenario de pruebas
    And hago clic en el botón de editar título y descripción
    And ingreso el título "GELP"
    And guardo la página