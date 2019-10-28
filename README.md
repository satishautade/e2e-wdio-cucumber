# Yet Another End To End Test Framework, finally a good one.
End to End (E2E) test automation framework template that can be adopted by any Product.
This framework intentionally keeps example scenario generic i.e. Search for a term in DuckDuckGo. 
We use Cucumber framework to document tests in [Gherkin](https://docs.cucumber.io) (Given, When, Then) format.
All the test files have a `.feature` extension and can be found in `features` directory of the project.

## Pre-requisites:
To run this project you need Nodejs installed. You can download it from [here](https://nodejs.org/en/download/current/) 
Its recommended to use a LTS version.
# How To Use:
  All the configuration is in `wdio.conf.js` file. Review it before running the tests.  
Use a powershell/command window to run following commands from project root folder (wherever you have cloned this repo).
```
  cd <project_dir>
```  
+ Install all the dependencies. Assuming you have installed node (npm is available out of the box).  
```
      npm install
```
+ Running The Tests:
The command to run tests is 
```
      npm test
```  
+ Generate HTML Reports:
Running the tests, logs the results in the form on JSON files using [allure-reports](https://webdriver.io/docs/allure-reporter.html) plugin. The following command would interpret those JSON files and generate HTML reports for you in the `allure-report` directory.
The command to run tests is 
```
      npm run reports
```  
If it doesn't automatically open the reports for you, it can be found at `./allure-report/index.html`
## Troubleshooting Node Installation On Windows:
Sometimes you end up with errors in building native extensions while installing Node or executing `npm install`. Follow the steps below to troubleshoot it.
Refer to the Pre-requisites for npm install on Windows at [node-gyp](https://github.com/nodejs/node-gyp).
You have to have [Python 2.7](https://www.python.org/downloads/) and [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) installed in order to build some native node packages. 
After installing Node, install `windows-build-tools` and `node-gyp` globally. Then configure python executable to be used by npm using following commands.(Make sure you're launching command prompt or powershell as Administrator)
```
  npm install --global --production windows-build-tools
  npm config set msvs_version 2017
  npm install --global node-gyp
  npm config set python C:\Users\<YOUR_USER_NAME>\.windows-build-tools\python27\pythonw.exe
```