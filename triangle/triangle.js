//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isEquilateral() {
    if (this.isInequality === true) return false;
    return this.a === this.b && this.b === this.c ? true : false;
  }

  get isIsosceles() {
    if (this.isInequality === true) return false;
    return this.a === this.b || this.a === this.c || this.b === this.c
      ? true
      : false;
  }

  get isScalene() {
    if (this.isInequality === true) return false;
    return this.a !== this.b && this.a !== this.c && this.b !== this.c
      ? true
      : false;
  }

  get isInequality() {
    if (this.isTriangle === false) return true;
    return this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
      ? true
      : false;
  }

  get isTriangle() {
    return this.a > 0 && this.b > 0 && this.c > 0 ? true : false;
  }
}
