@Mobi @Login
Feature: Login as Patient to Mobi Web

Scenario: Successful Patient Login
Given I am on Patient Login page
When I login as user 'satisha@medadvisor.net.au'
Then My prescriptions are displayed