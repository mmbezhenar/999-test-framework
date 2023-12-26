Feature: Change username in 999.md website

  Scenario: I login to 999.md website and change the username
    Given I am on the 999.md login page
    When I perform login action
    Then I change the username
    And I verify that the username is successfully changed