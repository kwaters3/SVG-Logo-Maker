const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function createLogo() {
  const shapeChoices = ['Triangle', 'Circle', 'Square'];

  const shapePrompt = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: shapeChoices,
    },
  ]);

  const colorPrompt = await inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ]);

  const textPrompt = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
    },
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
      console.error('Invalid shape choice');
      return;
  }

  shape.setColor(colorPrompt.color);
  shape.setText(textPrompt.text);

  const svg = shape.render();

  fs.writeFileSync('examples/logo.svg', svg);

  console.log('Generated logo.svg');
}

createLogo();
