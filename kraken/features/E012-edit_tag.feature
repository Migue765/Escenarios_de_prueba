Feature: Manage tags and sections

  @user1 @web
  Scenario: Edit an existing tag and save the changes
    ## Login to the Ghost admin
    Given I navigate to page "<URL>"
    When I wait for 2 seconds
    And I enter email 2"<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 4 seconds

    ## Edit an existing tag and save the changes
    When I click on the Tags section
    And I click on the Tag
    And I edit the tag name and change it to "<NEW-NAME-TAG>"
    And I click on the Save button
    And I click on the Tags section
    And I wait for 4 seconds
