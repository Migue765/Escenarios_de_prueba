Feature: Manage tags and sections

  @user1 @web
  Scenario: Create a new tag and verify it
    ## Create a new tag and verify it
    Given I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<NAME-TAG>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    When I click on the Tags section
    Then validate creation tag witn name "<NAME-TAG>"


    ## clean spacework for test
    And delete all tags