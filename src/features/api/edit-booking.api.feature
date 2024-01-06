Feature: API - Edit booking

  #Something with authorization, always Forbidden!
  Scenario: Edit a booking
    When I log in with default credentials
    When I send a PUT request to edit a booking
      | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
      | James     | Brown    | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
    Then I should see that the booking was edited successfully
