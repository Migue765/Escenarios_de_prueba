Feature: Manage tags and sections

  @user1 @web
  Scenario: Assign multiple tags to a post and verify they are saved correctly
    ## Login to the Ghost admin
    Given I navigate to page "<URL>"
    When I wait for 2 seconds
    And I enter email 2"<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 4 seconds

    ## Assign multiple tags to a post and verify they are saved correctly
    And I click on the Published section
    And I click on the Coming Soon published item
    And I click on the settings button
    And I enter the tag "<TAG-1>"
    And I enter the tag "<TAG-2>"
    And I enter the tag "<TAG-3>"
    Then I should see the tags "<TAG-1>", "<TAG-2>", and "<TAG-3>" associated with the post
    And I click on the Posts button
    And I wait for 4 seconds
