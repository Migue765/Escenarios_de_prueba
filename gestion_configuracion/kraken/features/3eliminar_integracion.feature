Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: Eliminar una integración y verificar que desaparezca de la lista
    Given navego a "http://localhost:2368/ghost"
    When espero 5 segundos
    When ingreso el correo electrónico "jn.cordobap1@uniandes.edu.co"
    And ingreso la contraseña "-:pM7A388!aDufu"
    When hago clic en iniciar sesión
    When hago clic en el botón de configuración
    When navego a la página de configuración avanzada
    When elimino la integración "Integración Personalizada"
    Then envío una señal al usuario 1 que contiene "La integración ha sido eliminada"

 