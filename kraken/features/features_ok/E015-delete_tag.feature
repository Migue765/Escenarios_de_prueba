Feature: Manage tags and sections

  @user1 @web
  Scenario: Delete a tag and verify it is not in the tag list
    ## Login to the Ghost admin
    Given I navigate to page "<URL>"
    When I wait for 2 seconds
    And I enter email 2"<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 4 seconds

    ## Delete a tag and verify it is not in the tag list
    When I click on the Tags section
    And I click on the Tag
    And I click on the Delete button
    And I confirm the deletion
    And I click on the Tags section
    Then I should not see the tag "<NEW-NAME-TAG>"
