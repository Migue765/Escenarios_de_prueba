Feature: Manage tags and sections

  @user1 @web
  Scenario: Delete a tag and verify it is not in the tag list
    Given I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<TAG-2>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    And I click on the Tags section
    And I wait for 1 seconds
    And I click on the Tag
    And I click on the Delete button
    And I confirm the deletion
    When I click on the Tags section
    Then I should not see the tag "<NEW-NAME-TAG>"
