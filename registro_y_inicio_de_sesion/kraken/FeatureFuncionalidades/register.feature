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

  @user2 @web
  Scenario: As a user, I leave the fields empty during registration
    Given I navigate to page "http://localhost:2368/ghost/#/setup"
    When I click on register
    Then I should see the following errors:
      | Field         | Error Message                             |
      | blog-title    | Please enter a site title.                |
      | name          | Please enter a name.                      |
      | email         | Please enter an email.                    |
      | password      | Password must be at least 10 characters long. |

  @user3 @web
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