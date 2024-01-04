Feature: UI - Favorites page

  Background:
    Given I am on the 999.md login page
    When I perform login action

  Scenario Outline: User Views Favorite Items
    When I add an "<item>" item to favorites
    Then I navigate to the favorites section
    And I should see the added item in the Favorites
    And I delete "<item>" from favorites section

    Examples:
      | item                       |
      | https://999.md/ru/85609787 |
