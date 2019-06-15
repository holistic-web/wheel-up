# Wheel Up
A service to enable a user to have greater control of the music they are playing.

![The chrome extension](/.project/assets/extension-initial.png)
_The chrome extension_

## Architecture
- [chrome-extension](/chrome-extension): the chrome extension to allow a user to control music they are playing.

## Project
Information about the project can be found in the [/.project](/.project) folder, it contains:
- [roadmap.md](/.project/roadmap.md)
- [`/manifest.json`](/manifest.json): Every extension has a JSON-formatted manifest file, named manifest.json, that provides important information. [Read more](https://developers.chrome.com/extensions/manifest).
- [`/src/background.js`](/src/background.js): Extensions monitor events in their background script, then react with specified instructions. [Read more](https://developers.chrome.com/extensions/background_pages).
- [`/src/views/popup.html`](/src/views/popup.html): [User Interface](https://developers.chrome.com/extensions/user_interface)

## Publishing
Publishing this app is currently done manually following the steps outlined here: https://developer.chrome.com/webstore/publish

## Development
To install this app on a single machine:
1. download this project onto your computer
2. navigate to `chrome://extensions` in chrome and set developer mode on
3. click the `Load Unpacked` button
4. select this projects folder on your local machine
