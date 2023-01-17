const {Builder} = require ("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

async function titleTest() {
    let driver = await new Builder()
    .forBrowser("chrome").build();
    //.setChromeOptions(new chrome.Options().headless())
    //.build();
    try {
        await driver.get('http://localhost:8080');
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
