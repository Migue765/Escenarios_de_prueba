Feature: user profile and actions

  @user1 @web
  Scenario: view menu activity user

    Given I click on the profile section
    When I click on the selection your profile
    And I wait for 4 seconds
    When I click the actions button
    And I wait for 2 seconds
    Then I should see menu view user activity


