//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.lados = sides;
  }

  get isEquilateral() {
    if (!this.isZero() && this.isTriangle()) {
      return this.isEqual().ladoA && this.isEqual().ladoB && this.isEqual().ladoC;
    }
    return false;
  }

  get isIsosceles() {
    if (!this.isZero() && this.isTriangle()) {
      return this.isEqual().ladoA || this.isEqual().ladoB || this.isEqual().ladoC;
    }
    return false;
  }

  get isScalene() {
    if (!this.isZero() && this.isTriangle()) {
      return !this.isEqual().ladoA && !this.isEqual().ladoB && !this.isEqual().ladoC;
    }
    return false;
  }

  isZero() {
    return (this.lados.reduce((a, b) => a + b) / 3) === 0;
  }

  isTriangle() {
    const ladoA = (this.lados[0] + this.lados[1]) > this.lados[2];
    const ladoB = (this.lados[0] + this.lados[2]) > this.lados[1];
    const ladoC = (this.lados[1] + this.lados[2]) > this.lados[0];

    return ladoA && ladoB && ladoC;
  }

  isEqual() {
    const ladoA = (this.lados[0] === this.lados[1]);
    const ladoB = (this.lados[0] === this.lados[2]);
    const ladoC = (this.lados[1] === this.lados[2]);

    return { ladoA, ladoB, ladoC }
  }
}
