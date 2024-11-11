  Feature: User Registration and Validation in Ghost
  @user1 @web
  Scenario: As a user, I complete registration and validate the dashboard
    Given I navigate to page "http://localhost:2368/ghost/#/setup"
    And I wait for 3 seconds
    When I enter blog title "<BLOG>"
    And I wait for 3 seconds
    When I enter name "<NAME>"
    And I wait for 3 seconds
    When I enter email "<EMAIL>"
    And I wait for 3 seconds
    When I enter password "<PASSWORD>"
    And I wait for 3 seconds
    When I click on register
    And I wait for 5 seconds
    Then I should see the dashboard or a logged-in page