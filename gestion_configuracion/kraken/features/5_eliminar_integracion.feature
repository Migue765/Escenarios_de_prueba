Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Eliminar una integración y verificar que desaparezca de la lista
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    And ingreso el correo electrónico "jn.cordobap1@uniandes.edu.co"
    And ingreso la contraseña "-:pM7A388!aDufu"
    And hago clic en iniciar sesión
    And hago clic en el botón de configuración
    And navego a la página de configuración avanzada
    When selecciono el botón "Custom" para asegurarme de que estoy en la pestaña correcta
    And espero a que la lista de integraciones esté visible
    And elimino la integración "Integración Personalizada" de la lista
    And espero a que el modal de confirmación esté visible
    And confirmo la eliminación
    Then envío una señal al usuario 1 que contiene "La integración ha sido eliminada"
