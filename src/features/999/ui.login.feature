Feature: UI - Log in to 999.md

  Scenario: Successful login
    Given I am on the 999.md login page
    When I perform login action
    Then I should be redirected to the home page
    And I should see a personal cabinet
