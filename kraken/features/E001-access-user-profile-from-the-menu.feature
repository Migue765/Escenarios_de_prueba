Feature: user profile and actions

  @user1 @web
  Scenario: acces user profile
    Given I click on the profile section
    Then I should see menu profile 
    When I click on the selection your profile
    And I wait for 4 seconds
    Then I should go to page profile

