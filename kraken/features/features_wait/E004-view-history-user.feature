Feature:  user profile and actions

  @user1 @web
  Scenario:  view history activity user

    Given I click on the profile section
    When I click on the selection your profile
    And I wait for 3 seconds
    When I click the actions button
    And I wait for 3 seconds
    When I click View user activity
    And I wait for 3 seconds
    Then I should see the title History
    


