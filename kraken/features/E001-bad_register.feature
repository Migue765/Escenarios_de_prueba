Feature: User Registration and Validation in Ghost
  @user1 @web
  Scenario: As a user, I try to register with an invalid email
    Given I navigate to page "http://localhost:2368/ghost/#/setup"
    And I wait for 3 seconds
    When I enter blog title "<BLOG>"
    And I wait for 3 seconds
    When I enter name "<NAME>"
    And I wait for 3 seconds
    When I enter email "<ERROREMAIL>"
    And I wait for 3 seconds
    When I enter password "<PASSWORD>"
    And I wait for 3 seconds
    Then I should see an error message "<ERROREMAIL>"
