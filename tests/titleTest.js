const {Builder} = require ("selenium-webdriver");

async function titleTest() {
    let driver = await new Builder().forBrowser("firefox").build();
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
