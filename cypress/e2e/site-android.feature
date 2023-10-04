Feature: Search
  As a visitor of The First Android website,
  I want to find the word Android

Scenario: Search on the website for the word Android
  Given I go to the URL_ANDROID
  Then the text "Android" should be visible on the website.