# 999-test-framework

## Table of Contents
- [About the Project](#about-the-project)
- [Frameworks](#frameworks)
- [Installation](#installation)
- [Run Tests](#run-tests)
- [Report](#report)
    - [Opening the HTML Report](#opening-the-html-report)

## About the Project

This project focuses on UI for the 999.md site, and API testing for the ...covering its main functionality. Additionally, Jenkins integration and the Allure reporter have been connected to enhance reporting capabilities. The project utilizes the Chromium web browser for UI testing.

## Frameworks

The project leverages the following frameworks and tools:
- Cucumber
- Jest
- Playwright
- Node.js

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/mmbezhenar/999-test-framework
    ```

2. If npm is not installed, use the following command to install it:
    ```bash
    npm install
    ```

3. Install `ts-node` globally:
    ```bash
    npm install -g ts-node
    ```

4. Install Cucumber:
    ```bash
    npm install @cucumber/cucumber -D
    ```

## Run Tests

To run the tests, you can use the following commands:

- To run all tests in Playwright UI mode:
    ```bash
    npx playwright test --ui
    ```

- To run all tests:
    ```bash
    npm test
    ```

- To run a specific test, update the paths in the `cucumber.json` file:
    ```json
    "paths" : [
      "src/test/features/ui/",
      "src/test/features/api/"
    ]
    

## Report

### Opening the HTML Report

After running the tests, you can find the `cucumber-report.html` file. To open the default HTML report:

1. Locate the `cucumber-report.html` file in your project directory.
2. Right-click on the file.
3. Choose "Open In" and select your preferred web browser.