function getCapabilitiesFor(browserName) {
  console.log("Returning capabilities obj for BROWSER => " + browserName);
  switch (browserName.toLowerCase()) {
    case 'firefox':
      return [{
        maxInstances: 5,
        browserName: 'firefox',
        // firefoxProfile: {
        //   extensions: [
        //     // '/path/to/extensionA.xpi', // path to .xpi file
        //     // '/path/to/extensionB' // or path to unpacked Firefox extension
        //   ],
        //   'browser.startup.homepage': 'https://webdriver.io',
        //   // legacy: true // used for firefox <= 55
        // }
      }];
    case 'chrome':
      return [{
        maxInstances: 5,
        browserName: 'chrome',
      }];
  }

}

module.exports = getCapabilitiesFor;