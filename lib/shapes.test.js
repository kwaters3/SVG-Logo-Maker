const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
  test('Triangle render', () => {
    const shape = new Triangle();
    shape.setShapeColor('blue');
    shape.setTextColor('red');
    shape.setText('My Triangle');
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />
                         <text x="50%" y="50%" fill="red" text-anchor="middle" alignment-baseline="middle">My Triangle</text>`;
    expect(shape.render()).toEqual(expectedSVG);
  });

  test('Circle render', () => {
    const shape = new Circle();
    shape.setShapeColor('red');
    shape.setTextColor('green');
    shape.setText('My Circle');
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" />
                         <text x="50%" y="50%" fill="green" text-anchor="middle" alignment-baseline="middle">My Circle</text>`;
    expect(shape.render()).toEqual(expectedSVG);
  });

  test('Square render', () => {
    const shape = new Square();
    shape.setShapeColor('green');
    shape.setTextColor('blue');
    shape.setText('My Square');
    const expectedSVG = `<rect x="80" y="50" width="140" height="140" fill="green" />
                         <text x="50%" y="50%" fill="blue" text-anchor="middle" alignment-baseline="middle">My Square</text>`;
    expect(shape.render()).toEqual(expectedSVG);
  });
});
