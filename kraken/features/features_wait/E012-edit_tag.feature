Feature: Manage tags and sections

  @user1 @web
  Scenario: Edit an existing tag and save the changes
    Given I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<NAME-TAG>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    And I click on the Tags section
    And I click on the Tag
    And I edit the tag name and change it to "<NEW-NAME-TAG>"
    And I click on the Save button
    And I click on the Tags section
    When I wait for 4 seconds
    Then validate creation tag witn name "<NEW-NAME-TAG>"

    ## clean spacework for test
    And delete all tags