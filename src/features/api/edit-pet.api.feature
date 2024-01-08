Feature: API - Edit Pet

  Scenario: Edit a pet in Store
    When I send a PUT request to edit a Pet in Store
      | categoryName | name  | status |
      | dog          | bella | sold   |
    Then I should see that the pet was edited successfully
      | categoryName | name  | status |
      | dog          | bella | sold   |