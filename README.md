# WebScraping Carne Escolar
![Snapshot to the processing of webscraping](/design/webscraping_page_html.jpg)

## Goals
Automation of the process of filling and printing the form for the creation of School Booklets.

## Technologies
- Javascript
- Puppeteer
- JSON

## How it works
The webscraping works with Node.JS, importing the Puppeteer. 
In the file (index.js), I imported the list in JSON format to use in the scraping. 
And then, I used two loops to filled in the program, and execute the CarneEscolar App to print the document.
