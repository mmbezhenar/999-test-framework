Feature: API - Booking

  Scenario: Retrieving All Booking IDs
    When I request all booking IDs
    Then I should receive a response containing an array of booking IDs

  Scenario Outline: Get Booking IDs by filter
    When I request booking IDs with the filter "<queryParam>", "<value>"
    Then I should receive a response containing an array of booking IDs that match the specified filter "<value>"

    Examples:
      | queryParam | value |
      | firstname  | Jim   |
