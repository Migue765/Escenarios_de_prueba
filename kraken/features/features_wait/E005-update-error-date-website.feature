Feature:  user profile and actions

  @user1 @web
  Scenario: error update website
    
    Given I click on the profile section
    When I click on the selection your profile
    And I wait for 3 seconds
    When I enter website text "<WEBSITE>"
    And I wait for 5 seconds
    When I click in save
    And I wait for 3 seconds
    Then I should see error website
    And I wait for 2 seconds

