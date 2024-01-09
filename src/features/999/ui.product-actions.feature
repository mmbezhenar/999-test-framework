Feature: UI - Product page actions

  Background:
    Given I am on the 999.md login page
    When I perform login action

  Scenario: Viewing Seller's Phone Number as a User
    When I select 'https://999.md/ru/84326344' product
    And I click on the [Show phone] button
    Then I should be able to see the seller's phone number

  Scenario Outline: As a user, I should have the ability to use quick links for searching products
    When I select "<productUrl>" product
    And I click on "<linkItem>" quick link item
    Then I navigate to the page with products that match the specified criteria "<linkItem>"

    Examples:
      | linkItem | productUrl                 |
      | Dacia    | https://999.md/ru/85549382 |
