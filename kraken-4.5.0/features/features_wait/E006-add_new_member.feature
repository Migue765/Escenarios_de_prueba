Feature: Crear un nuevo miembro

@user1 @web
Scenario: User 1 logs into Ghost
  Given I click in button members
  And I wait for 1 seconds
  And I click new member
  And I wait for 1 seconds
  And I insert member name "username1"
  And I wait for 2 seconds
  And I insert email "test@test.com"
  And I wait for 2 seconds
  And I insert note "Este es un miembro de prueba"
  And I wait for 2 seconds
  And I click in button save
  And I wait for 2 seconds
  And I click in button members
  And I wait for 1 seconds
  Then I should be the member in the list with name "username1"


  ## Clean test
  And I wait for 2 seconds
  And I delete all members
  