const pageChangeListener = () => {
	chrome.declarativeContent.onPageChanged.addRules([
		{
			conditions: [
				new chrome.declarativeContent.PageStateMatcher(
					{
						pageUrl: { hostEquals: 'youtube.com' },
					}
				)
			],
			actions: [ new chrome.declarativeContent.ShowPageAction() ]
		}
	]);
};

chrome.runtime.onInstalled.addListener(pageChangeListener);
