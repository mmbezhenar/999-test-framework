Feature: API - Login to a restful-booker page

  Scenario: Successful Login
    When I log in with default credentials
    Then I get auth token
