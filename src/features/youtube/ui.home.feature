Feature: UI - Home page

  Scenario Outline: Search for video
    Given I navigate to youtube
    When I search for "<criteria>" video
    Then I see results

    Examples:
      | criteria   |
      | Playwright |

  Scenario: User clicks on a video
    Given I navigate to youtube
    When I click on a video thumbnail
    Then I should be directed to the video playback page
    And The video should start playing
