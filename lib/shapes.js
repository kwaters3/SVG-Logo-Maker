class Shape {
  constructor() {
    this.shapeColor = 'black';
    this.textColor = 'black';
    this.text = '';
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    return '';
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="80" y="50" width="140" height="140" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
