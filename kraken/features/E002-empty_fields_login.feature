Feature: User Registration and Validation in Ghost
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

