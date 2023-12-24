Feature: Change username in 999.md website

  Scenario: I login to 999.md website and change the username
    Given I am on the 999.md login page
    When I perform login action
    Then the user changes the username
    And the user verifies that the username is successfully changed