// packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shape');


// array of questions for user input to create a logo
async function createLogo() {
  const shapeChoices = ['Triangle', 'Circle', 'Square'];


  // shape prompt
  const shapePrompt = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to create?',
      choices: shapeChoices
    }
  ]);

  // color prompt
  const colorPrompt = await inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: 'What color would you like to use? (color keyword or hex code)'
    }
  ]);

  // text prompt
  const textPrompt = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like to use?'
    }
  ]);

  let shape;

  switch (shapePrompt.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape');
      return;
  }

  shape.setColor(colorPrompt.color);
  shape.setText(textPrompt.text);

  const svg = shape.render();


  // Save to file pat
  fs.writeFile('./examples/logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Logo created!');
  });
}

createLogo();