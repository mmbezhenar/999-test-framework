Feature: Search products through categories in 999.md website

  Scenario: I login to 999.md website and search products throughout categories
    Given I am on the 999.md login page
    When I perform login action
    And I navigate to the categories section
    And I open the computers category
    And I browse the available laptop products