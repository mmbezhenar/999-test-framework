Feature: API - BookCart

  Scenario: Get the list of available books
    When I request for all book ids
    Then I should receive a response containing an array of book ids

#  Scenario Outline: Get Booking IDs by filter
#    When I request booking IDs with the filter "<queryParam>", "<value>"
#    Then I should receive a response containing an array of booking IDs that match the specified filter "<value>"
#
#    Examples:
#      | queryParam | value |
#      | firstname  | Jim   |
