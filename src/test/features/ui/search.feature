Feature: Search a product in 999.md website

  Scenario: I login to 999.md website and looking for a product
    When I login to 999.md website
    Then I'm looking for a product
    And I see search results
