const { Builder, By, until } = require('selenium-webdriver');

(async function homePageTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // 1️⃣ Open Home Page
        await driver.get('http://localhost:5173/');
        console.log("Home page opened");

        // ✅ Wait 3 seconds so you can see page load
        await driver.sleep(3000);

        // 2️⃣ Verify Logo
        await driver.wait(until.elementLocated(By.id('logo')), 10000);
        console.log("Logo found");

        // 3️⃣ Verify Navigation Links
        await driver.findElement(By.id('homeLink'));
        await driver.findElement(By.id('booksLink'));
        await driver.findElement(By.id('aboutLink'));
        await driver.findElement(By.id('contactLink'));
        console.log("Navigation links verified");

        // 4️⃣ Verify Browse Button
        let browseBtn = await driver.findElement(By.id('browseBtn'));
        await browseBtn.click();
        console.log("Browse button clicked");

        // ✅ Wait after click
        await driver.sleep(2000);

        // 5️⃣ Verify Categories
        await driver.findElement(By.id('fictionCard'));
        await driver.findElement(By.id('nonFictionCard'));
        await driver.findElement(By.id('technologyCard'));
        await driver.findElement(By.id('selfHelpCard'));
        console.log("All categories verified");

        // 6️⃣ Verify Footer
        await driver.findElement(By.id('footer'));
        console.log("Footer verified");

        console.log("All Home Page Test Cases Passed");

    } catch (error) {
        console.log("Test Failed:", error);
    } finally {

        // ✅ Wait before closing so you can see result
        await driver.sleep(5000);

        await driver.quit();
    }

})();