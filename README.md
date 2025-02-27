# NitroQA Automation Testing with Playwright
The QA study group is working on the Playwright From Zero to Hero course on Udemy, so as part of my learning I have started to compile test suites inside of Nitro's QA environment. This repository can be used and shared by other QAs looking to practice their skills with PW.

## Usage
In order to run these tests, you need to login to Nitro. This can be achieved with stored session data. To create session data for yourself, in the root directory of this project, run the command `npx playwright open --storage-save nitroQA.json`. This will open a blank chromium browser where you can navigate to NitroQA and login using your personal credentials. After closing the window, a JSON file will be created in your root directory which will be used as the context for the test suites.