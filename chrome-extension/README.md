# Chrome Extension
This is the chrome extension for the project Wheel Up.

## What it does
When on the youtube website, a user can click the extension to reveal a pop up allowing them to wheel up the current youtube song to the beginning.

## Architecture
- [`/manifest.json`](/manifest.json): Every extension has a JSON-formatted manifest file, named manifest.json, that provides important information. [Read more](https://developers.chrome.com/extensions/manifest).
- [`/src/background.js`](/src/background.js): Extensions monitor events in their background script, then react with specified instructions. [Read more](https://developers.chrome.com/extensions/background_pages).
- [`/src/views/popup.html`](/src/views/popup.html): [User Interface](https://developers.chrome.com/extensions/user_interface)

## Development
We are following the standards outlined by google [here](https://developers.chrome.com/extensions/getstarted).

To install this app on a single machine:
1. download this project onto your computer
2. navigate to `chrome://extensions` in chrome
3. click the `Load Unpacked` button
4. select this projects folder on your local machine

## Publishing
Publishing this app is currently done manually following the steps outlined here: https://developer.chrome.com/webstore/publish
