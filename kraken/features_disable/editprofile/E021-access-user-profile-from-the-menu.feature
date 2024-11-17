Feature: user profile and actions

  @user1 @web
  Scenario: acces user profile
    ## Login to the Ghost admin
    Given I navigate to page "<URL>"
    When I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 4 seconds

    ## Access to profile in menu
    When I click on the profile section
    Then I should see menu profile 
    When I click on the selection your profile
    And I wait for 4 seconds
    Then I should go to page profile

