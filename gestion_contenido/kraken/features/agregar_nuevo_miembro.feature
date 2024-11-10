Feature: Crear un nuevo miembro

@user1 @web
Scenario: User 1 logs into Ghost
  Given I navigate to "<URL>"
  And I wait for 1 seconds
  When I enter the email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click login
  And I wait for 1 seconds
  And I click in button members
  And I wait for 1 seconds
  And I click new member
  And I wait for 1 seconds
  And I insert member name "username1"
  And I wait for 2 seconds
  And I insert email "test@test.com"
  And I wait for 2 seconds
  And I insert label "labal de pruebas"
  And I wait for 2 seconds
  And I select Enter on label
  And I wait for 2 seconds
  And I insert note "Este es un miembro de prueba"
  And I wait for 2 seconds
  And I click in button save
  And I wait for 2 seconds
  And I click in button members
  And I wait for 1 seconds
  Then I send a signal to user 1 containing "login1 complete"
  