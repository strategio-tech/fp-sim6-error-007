const {Builder} = require ("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

const screen = {
    width: 640,
    height: 480
  };

async function titleTest() {
    let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
    try {
        await driver.get('http://54.144.107.113/');
        const actualTitle = await driver.getTitle();
        const expectedTitle = "Creature Coders";
        
        if(actualTitle == expectedTitle) {
            console.log("Title matched");
        }else{
            console.log("Title didn't match");
        }
    } catch (err) {
        console.log(err);
    } finally {
        await driver.quit();
    }
}
titleTest()
