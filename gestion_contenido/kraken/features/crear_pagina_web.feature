Feature: Crear una pagina nueva con titulo Mi primera pagina web

@user1 @web
Scenario: User 1 logs into Ghost
  Given I navigate to "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter the email "ma.gomeza1@uniandes.edu.co"
  And I enter password "misw4103-2024-15"
  And I click login
  And I wait for 2 seconds
  And I click in button pages
  And I wait for 3 seconds
  And I click new page
  And I wait for 2 seconds
  And I enter title "hola mundo"
  And I click back
  And I wait for 2 seconds
  Then I send a signal to user 1 containing "login1 complete"
  