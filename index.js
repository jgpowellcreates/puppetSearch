const puppeteer = require('puppeteer');

let allArgs = process.argv;
let userInput = allArgs.splice(2).join(' ') + " tempo";
console.log("Searching term:",userInput)
if (!userInput) {userInput = "barracuda heart tempo"};

//let results = [];

(async () => {
    const browser = await puppeteer.launch({
        //headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');

    //Search an input phrase
    //Focus on the search, enter phrase, search
    try {
        await page.evaluate((userInput) => {
            document.querySelector('div > input').value = userInput;
        }, userInput)

        //The following 2 lines just confirm that the value was altered
        const searchEl = await page.$eval('div > input', (input) => {return input.value});
        console.log("Search El returns:", searchEl, "<-- This should be EJ!");
    } catch (e) {
        if (e) {
            console.log("Search Value Error:", e)
            browser.close();
        }
    }

    try {
        await page.keyboard.press("Enter");
        await page.waitForNavigation();

        console.log("Enter pressed to search!");
    } catch (e) {
        if (e) {
            console.log("Click/Nav Error:", e)
        }
    }

    //Search first result title and return. Console Log return
    try {
        const result = await page.evaluate(() => {
            const spans = document.querySelectorAll(".jtfYYd > div[data-content-feature='1'] > div span");
            return Array.from(spans).map(span => span.innerText)
        })
        console.log(result);
    } catch (error) {
        console.log("Grab results error:", error)
    }

    await browser.close();
    console.log("Puppeteer browser closed");

    //Write a regex pattern that can look for BPMs
})();


//Catch a timeout error
// try {
//     await page.waitForSelector('.foo');
// } catch (e) {
//     if (e instanceof puppeteer.errors.TimeoutError) {
//         console.log("Error:", e)
//     }
// }