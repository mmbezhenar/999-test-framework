Feature: Switch language to russian in 999.md website

  Scenario: I login to 999.md website and switch language to russian

    Given I am on the 999.md login page
    When I perform login action
    Then I switch the language to Russian
    And I verify that the language is changed to Russian



