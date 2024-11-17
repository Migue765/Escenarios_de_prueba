Feature: Crear una pagina nueva con titulo Mi primera pagina web

@user1 @web
Scenario: User 1 logs into Ghost
  Given I click in button published
  And I wait for 1 seconds
  And I click new post
  And I wait for 1 seconds
  And I enter title "hola mundo"
  And I press Enter
  And I wait for 1 seconds
  And I enter body text "Esto es una prueba de contenido"
  And I wait for 1 seconds
  And I click publish
  And I wait for 1 seconds
  And I click in continue final review
  And I wait for 1 seconds
  And I click in confirm publish
  And I wait for 1 seconds
  And I click in close
  And I wait for 1 seconds
  Then I send a signal to user 1 containing "login1 complete"
  