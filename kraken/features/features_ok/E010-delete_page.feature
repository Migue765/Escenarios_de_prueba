Feature: Crear una pagina nueva con titulo Mi primera pagina web

@user1 @web
Scenario: User 1 logs into Ghost
  Given I navigate to "<URL>"
  And I wait for 1 seconds
  When I enter the email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click login
  And I wait for 1 seconds
  And I click in button pages
  And I wait for 1 seconds
  And I click the first post in the list
  And I wait for 5 seconds
  And I click in settings page
  And I wait for 4 seconds
  And I click in delete page
  And I wait for 2 seconds
  And I click in confirm delete page
  And I wait for 1 seconds
  Then I send a signal to user 1 containing "login1 complete"
  