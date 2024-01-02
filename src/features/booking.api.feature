Feature: API - Booking

  Scenario: Retrieving All Booking IDs
    Given I log in with default credentials
    When I request all booking IDs
    Then I should receive a response containing an array of booking IDs