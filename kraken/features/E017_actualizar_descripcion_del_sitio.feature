Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Actualizar la descripción del sitio en la configuración general
    Given hago clic en el botón de configuración
    And hago clic en el botón de editar título y descripción
    And ingreso la descripción "Nueva Descripción del Sitio"
    When guardo la página
    Then la descripción del sitio debería ser "Nueva Descripción del Sitio"


    ## Limpio el escenario de pruebas
    And hago clic en el botón de editar título y descripción
    And ingreso la descripción "default"
    And guardo la página