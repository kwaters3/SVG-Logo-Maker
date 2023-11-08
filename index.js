// Required Packages
const inquirer = require("inquirer");
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");



// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  // File starts as an empty string
  let svgString = "";
  // Sets width and height of logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`;



  // Takes users input from choices array and adds shape properties (color/text)
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Takes user input for text color and inserts it into SVG file
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag from line 18
  svgString += "</g>";
  // Closing </svg> tag from line 16
  svgString += "</svg>";


  // Writes SVG file to directory
  fs.writeFile(fileName, svgString, (err) => {
    err 
    ? console.log(err) 
    : console.log("Generated logo.svg");
  });
}

// Function prompts user for input using inquirer
function promptUser() {
  inquirer
    .prompt([

      // Shape choice prompt
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },

      // Text prompt
      {
        type: "input",
        message: "Enter the text for the logo (3 characters max):",
        name: "text",
      },

      // Text color prompt
      {
        type: "input",
        message: "Choose text color (color keyword or hex #):",
        name: "textColor",
      },

      // Shape color prompt
      {
        type: "input",
        message: "Choose shape background color (color keyword OR hex #):",
        name: "shapeBackgroundColor",
      },
    ])
    // Promise to handle user input
    .then((answers) => {
      // If user enters more than 3 characters, prompt user again
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Calling write file function to generate SVG file to directory
        writeToFile("logo.svg", answers);
      }
    });
}

// Calling promptUser function so inquirer prompts will start when npm start runs
promptUser();