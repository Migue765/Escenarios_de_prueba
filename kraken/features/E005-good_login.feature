Feature: User Registration and Validation in Ghost

@user1 @web
Scenario: As a user, I log in and validate the title
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  Then I should see the title "<BLOG>"
  And I wait for 3 seconds
  When I enter identification "<EMAIL>"
  And I wait for 3 seconds
  When I enter password "<PASSWORD>"
  And I wait for 3 seconds
  When I click in login
  And I wait for 3 seconds
  Then I should see the dashboard or a logged-in page