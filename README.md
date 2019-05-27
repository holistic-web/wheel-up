# Youtube Wheel-Up
A chrome extension to enable a user to _'wheel-up'_ a song playing on youtube.

![preview](/assets/images/readme.png)

When on the youtube website, a user can click the extension to reveal a pop up allowing them to wheel up the current youtube song to the beginning.

We are following the standards outlined by google [here](https://developers.chrome.com/extensions/getstarted).

## Architecture
- [`/manifest.json`](/manifest.json): Every extension has a JSON-formatted manifest file, named manifest.json, that provides important information. [Read more](https://developers.chrome.com/extensions/manifest).
- [`/src/background.js`](/src/background.js): Extensions monitor events in their background script, then react with specified instructions. [Read more](https://developers.chrome.com/extensions/background_pages).
- [`/src/views/popup.html`](/src/views/popup.html): [User Interface](https://developers.chrome.com/extensions/user_interface)

## Publishing
Publishing this app is currently done manually following the steps outlined here: https://developer.chrome.com/webstore/publish

## Development
To install this app on a single machine:
1. download this project onto your computer
2. navigate to `chrome://extensions` in chrome
3. click the `Load Unpacked` button
4. select this projects folder on your local machine