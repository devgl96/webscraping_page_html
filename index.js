// get the puppeteer
const puppeteer = require('puppeteer');

// Get the data from studentList.json
let studentList = require('./studentList.json');

// Array of classes
// let classes = ["Maternal", "Infantil I", "Infantil II", "Infantil III"];
let classes = ["Infantil I", "Infantil II", "Infantil III"];

// Show the data
// console.log("Student List: ", studentList);

// Aux variables
// let i = 0; // Classes Length
// let j = 0; // Student List length

// console.log(classes[i], " - ", studentList[classes[i]][j]["name"], " - ", studentList[classes[i]][j]["value"]);
function fillingFieldsOfDocument() {
  // setTimeout(() => {
    (async () => {
        for(let i = 0; i < classes.length; i++) {
          for(let j = 0; j < studentList[classes[i]].length; j++) {
            const browser = await puppeteer.launch({ 
              headless: false, 
              executablePath: "C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe",
              args: [
                // "--kiosk-printing",
                "--use-system-default-printer"
              ] 
            });
            const page = await browser.newPage();
          
            await page.setViewport({ width: 1440, height: 720 });
          
            await page.goto('http://127.0.0.1:5500/index.html');
          
            // const navigationPromise = page.waitForNavigation();
          
            await page.waitForSelector("#carneFevNov");
            await page.click("#carneFevNov");
          
            await page.waitForSelector("#meuForm");
            // Input: Nome Completo
            await page.click("input[placeholder='Digite o Nome Completo']");
            await page.type("input[placeholder='Digite o Nome Completo']", studentList[classes[i]][j]["name"]);
            // await page.type("input[placeholder='Digite o Nome Completo']", "George Lucas");
            
            // Select: Turma
            // console.log("Class Now: ", classes[i]);
            await page.select("#turmaAluno", classes[i]);
            // await page.select("#turmaAluno", "Infantil III");
          
            // Input: Valor
            await page.click("input[placeholder='Digite o Valor da Mensalidade']");
            await page.type("input[placeholder='Digite o Valor da Mensalidade']", studentList[classes[i]][j]["value"]);
            // await page.type("input[placeholder='Digite o Valor da Mensalidade']", "23,00");
            
            // Click: Imprimir Button
            await page.click(".button1");
          
            // await navigationPromise;

            // await page.evaluate(() => {
            //   window.print = function () {}
            // })
          
            // await page.waitForSelector("#sidebar");
          
            // // Click: Mais definições
            // await page.click("#label");
          
            // // Select: Margin Options
            // await page.select("aria-labelledby='margins-label'", "Mínima");
          
          
            await page.screenshot({ path: `example${j}${i}.png` });
      
            await page.waitForTimeout(1000);
          
            await browser.close();
          }
        }
      })();
    // }, 10000);
  }

  function main() {
    if(i < classes.length) {
      if (j < studentList[classes[i]].length) {
        fillingFieldsOfDocument(i, j);
        j++;
      } else {
        i++;
        j = 0;
      }

      // main(); 

    } else {
      console.log("The End!");
    }

  }

// main();
fillingFieldsOfDocument();
