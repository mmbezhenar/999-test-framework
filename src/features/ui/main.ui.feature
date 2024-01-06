Feature: Search products through categories in 999.md website

  Background:
    Given I am on the 999.md login page
    When I perform login action

  Scenario Outline: I login to 999.md website and search products throughout categories
    Then I switch to the <language> language
    And I verify that the language is changed to <language>

    Examples:
      | language |
      | russian  |
      | romanian |

