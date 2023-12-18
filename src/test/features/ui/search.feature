Feature: Search a product in 999.md website

  Scenario: I login to 999.md website and looking for a product
    Given I am on the 999.md login page
    When I perform login action
    Then I'm looking for a product
    And I see search results
