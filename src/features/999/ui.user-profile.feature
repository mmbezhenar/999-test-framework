Feature: UI - Change username in 999.md website

  Background:
    Given I am on the 999.md login page
    When I perform login action

  Scenario: I login to 999.md website and change the username
    Then I change the username
    And I verify that the username is successfully changed
