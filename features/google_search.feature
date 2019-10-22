Feature: Google Search

Scenario: Search for cucumbers
Given I am a web user
When I search google for 'cucumber'
Then I get some results containing 'cucumber'