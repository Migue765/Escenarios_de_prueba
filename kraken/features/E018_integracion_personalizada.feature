Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Configurar una integración personalizada en la sección avanzada y verificar su creación
    Given navego a "<URL>"
    When espero 5 segundos
    When ingreso el correo electrónico "<EMAIL>"
    And ingreso la contraseña "<PASSWORD>"
    When hago clic en iniciar sesión
    When hago clic en el botón de configuración
    When navego a la página de configuración avanzada
    When agrego una nueva integración personalizada con el nombre "Integración Personalizada"
    #Then debería ver "Integración Personalizada" en la lista de integraciones