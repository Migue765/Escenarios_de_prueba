Feature: Crear una pagina nueva con titulo Mi primera pagina web

@user1 @web
Scenario: User 1 logs into Ghost
  Given I click in button pages
  And I wait for 1 seconds
  And I click new page
  And I wait for 1 seconds
  And I enter title "hola mundo no delete"
  And I press Enter
  And I wait for 1 seconds
  And I enter body text "Esto es una prueba de contenido"
  And I click publish
  And I wait for 1 seconds
  And I click in continue final review
  And I wait for 1 seconds
  And I click in confirm publish
  And I wait for 1 seconds
  And I click in close
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I click new page
  And I wait for 1 seconds
  And I enter title "hola mundo delete"
  And I press Enter
  And I wait for 1 seconds
  And I enter body text "Esto es una prueba de contenido"
  And I click publish
  And I wait for 1 seconds
  And I click in continue final review
  And I wait for 1 seconds
  And I click in confirm publish
  And I wait for 1 seconds
  And I click in close
  And I wait for 1 seconds
  And I click the first post in the list
  And I wait for 1 seconds
  And I click in settings page
  And I wait for 1 seconds
  And I click in delete page
  And I wait for 1 seconds
  And I click in confirm delete page
  And I wait for 1 seconds
  Then I should dont be the page in the list with name "hola mundo delete"

  ## Clean the test
  And I delete all pages
  