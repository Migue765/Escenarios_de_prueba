Feature: Gestión de Configuración (Settings)

  @user1 @web
  Scenario: User 1 logs into Ghost and creates a new page
    Given I navigate to "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "misw4103-2024-15"
    And I click login
    And I wait for 2 seconds
    And I click on the pages section
    And I wait for 3 seconds
    And I click on the new page button
    And I wait for 2 seconds
    And I enter the title "hola mundo"
    And I go back to the previous page
    And I wait for 2 seconds
    Then I send a signal to user 1 containing "login1 complete"

  @user1 @web
  Scenario: Configure a custom integration
    Given I navigate to "http://localhost:2368/ghost/#/signin"
    When I enter the email "jn.cordobap1@uniandes.edu.co"
    And I enter password "misw4103-2024-15"
    And I click login
    And I navigate to the advanced settings page
    When I add a new custom integration with name "My Custom Integration"
    Then I should see "My Custom Integration" in the integrations list
