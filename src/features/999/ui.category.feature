Feature: UI - Search products through categories in 999.md website

  Background:
    Given I am on the 999.md login page
    When I perform login action

  Scenario Outline: I login to 999.md website and search products throughout categories
    And I navigate to the categories section
    And I open the <category> category
    And I browse the available <productType> products

    Examples:
      | category  | productType |
      | computers | monitors    |
      | transport | trailers    |
      | tourism   | holidays    |
      | services  | passenger   |
