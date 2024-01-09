Feature: API - Create Pet

  Scenario: Create a new pet in Pet Store
    When I send a POST request to create a pet
      | categoryName | name   | status    |
      | cat          | rockie | available |
    Then I should see that the pet was created successfully
