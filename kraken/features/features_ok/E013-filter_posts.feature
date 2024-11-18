Feature: Manage tags and sections

  @user1 @web
  Scenario: Filter posts by tag
    ## Login to the Ghost admin
    Given I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<NAME-TAG>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    And I click on the Tags section
    And I click on the Posts section
    And I click on the filter posts by tag
    And I should see posts associated with the tag "<NEW-NAME-TAG>"
    And I click on the specific tag
    When I wait for 4 seconds
    Then validate tag in filter "<NAME-TAG>"

    ## clean spacework for test
    And I click on the Tags section
    And delete all tags

