Feature: user profile and actions

  @user1 @web
  Scenario: view date user profile
    Given I click on the profile section
    When I click on the selection your profile
    And I wait for 5 seconds
    Then I should see user name as "<NAMEUSER>"
   


