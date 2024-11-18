Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Configurar una integración personalizada en la sección avanzada y verificar su creación
  
    Given hago clic en el botón de configuración
    When espero 5 segundos
    When navego a la página de configuración avanzada
    When espero 5 segundos
    When agrego una nueva integración personalizada con el nombre "Integración Personalizada"
    When espero 5 segundos
    Then debería ver "Integración Personalizada" en la lista de integraciones

    ## Delete all integration
    And delete all custom integration
