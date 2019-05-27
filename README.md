# Youtube Wheel-Up
A chrome extension to enable a user to 'wheel-up' a song playing on youtube.

When on the youtube website, a user can click the extension to reveal a pop up allowing them to wheel up the current youtube song to the beginning.

It is currently in the initial phase of development. More to come shortly. We are following the standards outlined by google [here](https://developers.chrome.com/extensions/getstarted)

## Architecture
- [/manifest.json](/manifest.json): [Every extension has a JSON-formatted manifest file, named manifest.json, that provides important information.](https://developers.chrome.com/extensions/manifest)
- [/src/background.js](/src/background.js): [Extensions monitor events in their background script, then react with specified instructions.](https://developers.chrome.com/extensions/background_pages)
- [/src/views/popup.html](/src/views/popup.html): [User Interface.](https://developers.chrome.com/extensions/user_interface)