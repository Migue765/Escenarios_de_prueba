Feature: Crear una pagina nueva con titulo Mi primera pagina web

@user1 @web
Scenario: User 1 logs into Ghost
  Given I click in button published
  And I wait for 1 seconds
  And I click new post
  And I wait for 1 seconds
  And I enter title "hola post"
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
  When I click in close
  And I wait for 1 seconds
  Then I should be the page in the list with name "hola post"
  

  ## Clean the test space
  And I delete all pages