Feature: Manage tags and sections

  @user1 @web
  Scenario: Assign multiple tags to a post and verify they are saved correctly
    ## Assign multiple tags to a post and verify they are saved correctly
    Given I click in button published
    And I wait for 1 seconds
    And I click new post
    And I wait for 1 seconds
    And I enter title "hola post"
    And I press Enter
    And I wait for 1 seconds
    And I enter body text "Esto es una prueba de contenido"
    And I wait for 1 seconds
    And I click publish
    And I wait for 1 seconds
    And I click in continue final review
    And I wait for 1 seconds
    And I click in confirm publish
    And I wait for 3 seconds
    And I click in close
    And I wait for 1 seconds

    And I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<TAG-1>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    And I click on the Tags section

    And I click on the Tags section
    And I click on the New tag section
    And I enter the tag name "<TAG-2>"
    And I enter the tag color "<TAG-COLOR>"
    And I enter the tag description "<DESCRIPTION>"
    And I click on the Save button
    And I click on the Tags section
    And I wait for 1 seconds

    And I click on the Published section
    And I click on the Coming Soon published item
    And I click on the settings button
    And I enter the tag "<TAG-1>"
    And I enter the tag "<TAG-2>"
    Then I should see the tags "<TAG-1>", "<TAG-2>" associated with the post



    ## Clean the test space
    And I navigate to page "<URL>"
    And I click on the Tags section
    And delete all tags
    And I click in button published
    And I wait for 2 seconds
    And I delete all pages