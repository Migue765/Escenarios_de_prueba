Feature: Manage tags and sections

  @user1 @web
  Scenario: Create a new tag and verify it
    ## Login to the Ghost admin
    Given I navigate to page "http://localhost:2369/ghost/"
    When I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 4 seconds

    ## Create a new tag and verify it
    And I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<NAME-TAG>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    And I click on the Tags section
    And I click on the Published section
    And I click on the Coming Soon published item
    And I click on the settings button
    And I enter the tag "<NAME-TAG>"
    And I click on the Posts button
    And I wait for 4 seconds
