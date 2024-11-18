Feature: user profile and actions

  @user1 @web
  Scenario: acces user profile
    Given I click on the profile section
    And I should see menu profile 
    And I click on the selection your profile
    When I wait for 4 seconds
    Then I should go to page profile

