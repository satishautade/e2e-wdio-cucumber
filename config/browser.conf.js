const config = require('./wdio.conf');
config.capabilities = [{
  // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  // grid with only 5 firefox instances available you can make sure that not more than
  // 5 instances get started at a time.
  maxInstances: 5,
  //
  browserName: 'firefox',
  // If outputDir is provided WebdriverIO can capture driver session logs
  // it is possible to configure which logTypes to include/exclude.
  // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
  // excludeDriverLogs: ['bugreport', 'server'],
  // firefoxProfile: {
  //   extensions: [
  //     // '/path/to/extensionA.xpi', // path to .xpi file
  //     // '/path/to/extensionB' // or path to unpacked Firefox extension
  //   ],
  //   // 'browser.startup.homepage': 'https://webdriver.io',
  //   // legacy: true // used for firefox <= 55
  // },
}]
module.exports = config;