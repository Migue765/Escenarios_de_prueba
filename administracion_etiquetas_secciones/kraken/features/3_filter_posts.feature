Feature: Manage tags and sections

  @user1 @web
  Scenario: Filter posts by tag
    ## Login to the Ghost admin
    Given I navigate to page "http://localhost:2369/ghost/"
    When I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 4 seconds

    ## Filter posts by tag
    And I click on the Posts section
    And I click on the filter posts by tag
    Then I should see posts associated with the tag "<NEW-NAME-TAG>"
    And I click on the specific tag
    And I wait for 4 seconds
