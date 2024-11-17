Feature: Crear una pagina nueva con titulo Mi primera pagina web

@user1 @web
Scenario: User 1 logs into Ghost
  Given I click in button pages
  And I wait for 1 seconds
  And I click new page
  And I wait for 1 seconds
  And I enter title "hola mundo"
  And I press Enter
  And I wait for 1 seconds
  And I enter body text "Esto es una prueba de contenido"
  And I click publish
  And I wait for 1 seconds
  And I click in continue final review
  And I wait for 2 seconds
  And I click in confirm publish
  And I wait for 3 seconds
  When I click in close
  Then I should be the page in the list with name "hola mundo"

  ## Clean the test space
  And I wait for 2 seconds
  And I delete all pages
  