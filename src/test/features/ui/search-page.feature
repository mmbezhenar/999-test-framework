Feature: Search a product in 999.md website

  Background:
    Given I am on the 999.md login page
    When I perform login action

  Scenario Outline: I login to 999.md website and looking for a product
    Then I'm looking for a <product>
    And I see <product> search results

    Examples:
      | product  |
      | car      |
      | home     |
      | services |
      | phone    |