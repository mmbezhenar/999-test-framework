Feature: API - Pet Store

  Scenario Outline: Retrieving All Pets by Status
    When I request pets IDs with the filter "<queryParam>", "<value>"
    Then I should receive a response containing an array of pets IDs that match the specified filter "<value>"

    Examples:
      | queryParam | value     |
      | status     | available |