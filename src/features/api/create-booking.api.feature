Feature: API - Create booking

  Scenario: Create a new booking
    When I send a POST request to create a booking
      | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
      | Jim       | Brown    | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
    Then I should see that the booking was created successfully

