Feature: Search
  As a visitor of The First Android website,
  I want to find the word Android

Scenario: Search on the website for the word Android
  Given I go to the URL_ANDROID
  When I visit the website
  And I navigate to the page
  Then the text "Android" should be visible on the website.