# Browser Extension
This is the browser extension for the Wheel Up Project. It gives a user more control of the music playing on a web tab.

## About
This extension is written in Vue.js and was built following this guide:
https://github.com/superoo7/vue-cli-plugin-chrome-ext (@`0.0.5`)

## Development
We are currently only developing in Google Chrome:

1. navigate to this folder and ensure dependencies are installed with `npm install`.

2. ensure [extension-reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) is installed
	_reloads the extension whenever the code is updated_

3. Start development mode by running `npm run build-watch`
	_ensures extension recompiles whenever changes are made_

4. If this is your first time working on this extension, open chrome and navigate to `chrome://extensions`. Then click `'Load Unpacked'` and select the `/dist` folder.

## Deploying
To create a production ready build of this project:

1. run `npm run build`
	_generate the extension with static files_

2. distribute the `dist` folder as this is the compiled extension

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
